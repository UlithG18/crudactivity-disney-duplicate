const realLogBtn = document.getElementById("logBtn")
const errorMessage = document.getElementById('warningMsg');



function userRealLog() {
    const loadUser = getUser()
    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;

    if (!userEmail || !userPassword) {
        errorMessage.textContent = "You need to fill all the gaps";
        return;
    }

    if (userEmail === loadUser.email && userPassword === loadUser.password) {
        window.location.href = '../pages/homepage.html'

    } else {
        errorMessage.textContent = "The information doesn't match, enter the correct email and password";
        return;
    }
}

function getUser() {
    return JSON.parse(localStorage.getItem("user")) || {};
}

realLogBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userRealLog()
})