const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn")

function userLogin() {
    if (!loadUser.email && !loadUser.password) {
        console.log("You need to create an account first")
    } else {
        window.location.href = '../pages/login.html'
    }
}

function userRegister() {
    const loadUser = getUser()
    const userEmail = document.getElementById("inputEmail").value;
    const errorMessage = document.getElementById('WarningMsg');

    if (!userEmail) {
        errorMessage.textContent = "You need to enter an Email"
        return;
    }

    if (loadUser.email === userEmail && loadUser.password) {
        errorMessage.innerHTML = `<p>You alredy have an account <a href="pages/login.html" class="text-sm underline">LOGIN</a> </p>`;
        return;
    } else {
        loadUser.email = userEmail

        setUser(loadUser)
        window.location.href = 'pages/register.html'
    }
}

function getUser() {
    return JSON.parse(localStorage.getItem("user")) || {};
}

function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userLogin()
})

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userRegister()
})