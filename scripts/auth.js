document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();  
    const dateHtml = today.toISOString().slice(0, 10);  
    document.getElementById('date').setAttribute('max', dateHtml);

    const authForm = document.getElementById('auth_form');
    authForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const login = document.getElementById('login').value;
        const dateOfBirth = document.getElementById('date').value;
        const gender = document.querySelector('input[type="radio"]:checked').value;

        localStorage.setItem('login', login);
        localStorage.setItem('dateOfBirth', dateOfBirth);
        localStorage.setItem('gender', gender);
        window.location.href = 'index.html';
    });
});
