document.addEventListener("DOMContentLoaded", () => {
    const loadUser = JSON.parse(localStorage.getItem('user')) || {};
    const emailPreView = document.getElementById("emailPv")
    if (!loadUser.email) {
        console.log("You need to create an account first")
    } else {
        emailPreView.innerHTML = `<p class="text-sm mb-4">Create your account with <span id="emailPv" class="font-bold">${loadUser.email} </span><a href="../index.html" class="text-blue-600 hover:underline text-xs">(edit)</a></p>`
    }
});

const createBtn = document.getElementById("createBtn");

function userCreate() {
    const userPass = document.getElementById("password").value;
    const errorMessage = document.getElementById('WarningMsg');

    if (!userPass) {
        errorMessage.textContent = "You need to enter a password";
        return;
    }


    loadUser.password = userPass

    localStorage.setItem('user', JSON.stringify(loadUser))
    window.location.href = '/login.html'

}

createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userCreate()
})

