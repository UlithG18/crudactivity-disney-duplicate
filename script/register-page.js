document.addEventListener("DOMContentLoaded", () => {
    const emailPreView = document.getElementById("emailPv")
    const loadUser = getUser()

    if (!loadUser.email) {
        console.log("You need to create an account first")
    } else {
        emailPreView.innerHTML = `<p class="text-sm mb-4">Create your account with <span id="emailPv" class="font-bold">${loadUser.email} </span><a href="../index.html" class="text-blue-600 hover:underline text-xs">(edit)</a></p>`
    }
});

const createBtn = document.getElementById("createBtn");
const errorMessage = document.getElementById('WarningMsg');

function userCreate() {
    const userPass = document.getElementById("password").value;

    const termsCheck = document.getElementById("termsCheck").checked;
    const privacyCheck = document.getElementById("privacyCheck").checked;

    if (!userPass) {
        errorMessage.textContent = "You need to enter a password";
        return;
    }

    if (!termsCheck || !privacyCheck) {
        errorMessage.textContent = "You must accept all required terms";
        return;
    }

    const loadUser = getUser()
    loadUser.password = userPass

    setUser(loadUser)
    window.location.href = '../pages/login.html'
}

function getUser() {
    return JSON.parse(localStorage.getItem("user")) || {};
}

function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userCreate()
})

