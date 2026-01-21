const loadUser = JSON.parse(localStorage.getItem('user')) || [];

const createBtn = document.getElementById("createBtn")

const emailPreView = document.getElementById("emailPv")

if (!loadUser.email) {
    console.log("You need to create an account first")
} else {
    emailPreView.innerHTML = `<p class="text-sm mb-4">Create your account with <span id="emailPv" class="font-bold">${loadUser.email} </span><a href="../index.html" class="text-blue-600 hover:underline text-xs">(edit)</a></p>`
}
