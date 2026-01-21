const realLogBtn = document.getElementById("logBtn")
const errorMessage = document.getElementById('WarningMsg');



function userRealLog() {
    const loadUser = getUser()
    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;

    if (!loadUser.email || !loadUser.password) {
        errorMessage.textContent = "You need to fill all the gaps";
        return;
    }

    if (userEmail !== loadUser.email || userPassword !== loadUser.password) {
        errorMessage.textContent = "The information doesn't match, enter the correct email and password";
        return;
    } else {
        setUser(loadUser)
        window.location.href = '../pages/login.html'
    }
}



function getUser() {
    return JSON.parse(localStorage.getItem("user")) || {};
}

function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

realLogBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userRealLog()
})