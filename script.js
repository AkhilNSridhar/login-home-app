// Predefined user credentials
const predefinedUser = {
    username: 'user',
    password: 'password123',
};

// Elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const errorMessage = document.getElementById('errorMessage');

// Check if already logged in
if (localStorage.getItem('isLoggedIn')) {
    window.location.href = 'home.html';
}

// Login event
loginButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === predefinedUser.username && password === predefinedUser.password) {
        localStorage.setItem('isLoggedIn', true);
        window.location.href = 'home.html';
    } else {
        errorMessage.classList.remove('hidden');
    }
});