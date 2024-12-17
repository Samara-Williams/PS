const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

document.getElementById('loginButton')?.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('loginMessage').innerText = 'Login successful!';
        setTimeout(() => {
            window.location.href = 'success.html';
        }, 1000);
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid username or password.';
    }
});

document.getElementById('signupButton')?.addEventListener('click', () => {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    users.push({ username, password });
    document.getElementById('signupMessage').innerText = 'Signup successful! You can now log in.';
});