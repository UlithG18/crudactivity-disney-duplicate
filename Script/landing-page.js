const loadUser = JSON.parse(localStorage.getItem('user')) || [];

const registerBtn = document.getElementById("registerBtn");

function userLogin() {

    if (!loadUser && !loadUser.email && !loadUser.password) {
        console.log("You need to create an account first")
    } else {
        window.location.href = '../pages/login.html'
    }
}

function userRegister() {
    const userEmail = document.getElementById("inputEmail").value;
    const actualUser = loadUser.Email === userEmail;
    const errorMessage = document.getElementById('WarningMsg');

    if (!userEmail) {
        errorMessage.textContent = "You need to enter an Email"
    }

    if (actualUser) {
        errorMessage.innerHTML = `<p>You alredy have an account <a href="pages/login.html" class="text-sm underline">LOGIN</a> </p>`;
    } else {
        const user = { email: userEmail }

        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = '../pages/register.html'
    }
}

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userRegister()
})