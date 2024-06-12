document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        alert('Please log in first.');
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'home.html';
    });
});
