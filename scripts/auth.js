document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();  
    const dateHtml = today.toISOString().slice(0, 10);  
    document.getElementById('date').setAttribute('max', dateHtml);

    const authForm = document.getElementById('auth_form');
    
    authForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        resetErrors();

        let isValid = true;

        // Логин
        const login = document.getElementById('login').value;
        const loginError = document.getElementById('login-error');
        if (!login || !/^[а-яА-ЯёЁ0-9]{4,10}$/.test(login)) {
            loginError.textContent = "Логин должен содержать от 4 до 10 символов: только русские буквы и цифры";
            loginError.style.display = 'block';
            isValid = false;
        }

        // Дата рождения
        const dateOfBirth = document.getElementById('date').value;
        const dateError = document.getElementById('date-error');
        if (!dateOfBirth) {
            dateError.textContent = "Пожалуйста, выберите дату рождения";
            dateError.style.display = 'block';
            isValid = false;
        }

        
        const gender = document.querySelector('input[type="radio"]:checked');
        const genderError = document.getElementById('gender-error');
        if (!gender) {
            genderError.textContent = "Пожалуйста, выберите пол";
            genderError.style.display = 'block';
            isValid = false;
        }

        
        if (isValid) {
            localStorage.setItem('login', login);
            localStorage.setItem('dateOfBirth', dateOfBirth);
            localStorage.setItem('gender', gender.value);
            window.location.href = 'index.html';
        }
    });

    
    function resetErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => {
            error.style.display = 'none';
        });
    }
});
