// register.js

const form = document.querySelector('form');
const message = document.querySelector('.message');

form.addEventListener('submit', async(event) => {
    event.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;

    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        message.textContent = data.message;
        window.location.href = '/home';
    } else {
        message.textContent = data.message;
    }
});