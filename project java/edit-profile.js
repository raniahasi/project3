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

    const editProfileForm = document.getElementById('editProfileForm');
    document.getElementById('username').value = currentUser.username;
    document.getElementById('email').value = currentUser.email;
    document.getElementById('position').value = currentUser.position;
    document.getElementById('image').value = currentUser.image;

    editProfileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const updatedUser = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            position: document.getElementById('position').value,
            image: document.getElementById('image').value
        };

        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        alert('Profile updated successfully!');
        window.location.href = 'profile.html';
    });
});
