document.addEventListener('DOMContentLoaded', function() {
    const login = localStorage.getItem('login') || 'Не указан';
    const dateOfBirth = localStorage.getItem('dateOfBirth') || 'Не указана';
    const gender = localStorage.getItem('gender') || 'Не указан';
    const testResult = localStorage.getItem('testResult');

    document.getElementById('profile-login').textContent = login;
    document.getElementById('profile-date').textContent = dateOfBirth;
    document.getElementById('profile-gender').textContent = gender === 'male' ? 'Мужской' : 'Женский';

    const testResultElement = document.getElementById('profile-test-result');
    
   
    if (testResult && /^[0-6] из 6$/.test(testResult)) {
        testResultElement.textContent = testResult;
    } else {
        testResultElement.textContent = 'Тест не пройден';
    }
});

document.addEventListener('DOMContentLoaded', function() {
   
    const logoutButton = document.getElementById('logout-btn');

    logoutButton.addEventListener('click', function() {
        
        localStorage.clear();

        
        window.location.href = 'auth.html'; 
    });
});
document.querySelector('.logout').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = 'auth.html';
});
