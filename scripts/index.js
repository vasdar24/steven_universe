document.querySelector('.logout').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = 'auth.html';
});
