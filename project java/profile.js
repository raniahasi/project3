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

    const profileInfo = document.getElementById('profileInfo');
    profileInfo.innerHTML = `
    <img src="${currentUser.image}" alt="Profile Image" class="img-fluid">
        <p><strong>Username:</strong> ${currentUser.username}</p>
        <p><strong>Email:</strong> ${currentUser.email}</p>
        <p><strong>Position:</strong> ${currentUser.position}</p>
        
    `;
});
