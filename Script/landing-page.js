const loadUser = JSON.parse(localStorage.getItem('user')) || [];

const registerBtn = document.getElementById("registerBtn");

function userRegister() {
    const userEmail = document.getElementById("inputEmail").value;
    const actualUser = loadUser.Email === userEmail;
    const errorMessage = document.getElementById('WarningMsg');

    if (!userEmail) {
        errorMessage.textContent = "You need to enter an Email"
    }

    if (actualUser) {
        errorMessage.textContent = "You alredy have an account";
        errorMessage.innerHTML = `<a href="pages/login.html" class="text-sm underline">View details of plans</a>`;
    } else {
        const user = { Email: userEmail }

        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = '../pages/register.html'
    }

}

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userRegister()
})