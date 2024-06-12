document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const navLinks = document.getElementById('navLinks');

    if (currentUser) {
        navLinks.innerHTML = `
            <li class="nav-item"><a class="nav-link" href="profile.html">${currentUser.username}</a></li>
           
             <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
              <li class="nav-item"><a class="nav-link" href="#" id="logout">Logout</a></li>
            
            

        `
        ;

        document.getElementById('logout').addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            window.location.href = 'home.html';
        });
    }
});
