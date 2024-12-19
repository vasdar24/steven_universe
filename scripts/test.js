document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.test-form');
    const submitBtn = form.querySelector('.submit-btn');
    const restartBtn = form.querySelector('.restart-btn');
    const resultContainer = form.querySelector('.result');
    const scoreSpan = form.querySelector('#score');
    const feedbackElements = form.querySelectorAll('.feedback');

    const correctAnswers = {
        q1: 'Ребекка Шугар',
        q2: 'Опал',
        q3: 'Роза Кварц',
        q4: 'Малахит',
        q5: 'Правда',
        q6: 'Ложь'
    };

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        let score = 0;

        
        checkAnswer('q1');
        checkAnswer('q2');
        checkAnswer('q3');
        checkAnswer('q4', true);
        checkAnswer('q5', true);
        checkAnswer('q6', true);

        
        function checkAnswer(question, isText = false) {
            const userAnswer = isText 
                ? form.querySelector(`[name=${question}]`).value.trim() 
                : form.querySelector(`input[name=${question}]:checked`)?.value;

            const feedbackElement = document.getElementById(`feedback-${question}`);
            if (userAnswer) {
                if (userAnswer.toLowerCase() === correctAnswers[question].toLowerCase()) {
                    feedbackElement.textContent = 'Ответ правильный!';
                    feedbackElement.style.color = '#2ecc71';
                    score++;
                } else {
                    feedbackElement.textContent = `Ответ неправильный, правильный ответ: ${correctAnswers[question]}`;
                    feedbackElement.style.color = '#ff7777';
                }
            } else {
                
                feedbackElement.textContent = `Ответ неправильный, правильный ответ: ${correctAnswers[question]}`;
                feedbackElement.style.color = '#ff7777';
            }
        }

        
        scoreSpan.textContent = `${score} из 6`;
        resultContainer.style.display = 'block';
        restartBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none'; 

        
        const testResult = `${score} из 6`;
        localStorage.setItem('testResult', testResult);
    });

    restartBtn.addEventListener('click', function() {
       
        form.reset();
        feedbackElements.forEach(feedback => feedback.textContent = '');
        resultContainer.style.display = 'none';
        restartBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block'; 
    });
});
document.querySelector('.logout').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = 'auth.html';
});
