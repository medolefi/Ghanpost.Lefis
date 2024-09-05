// Show/hide login and register forms
document.getElementById('show-register').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Simulate a database with localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Register new user
document.getElementById('register-button').addEventListener('click', () => {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');
        document.getElementById('show-login').click();
    } else {
        alert('Please enter both username and password.');
    }
});

// Login user
document.getElementById('login-button').addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'blog.html';  // Redirect to the blog page
    } else {
        alert('Invalid username or password.');
    }
});
