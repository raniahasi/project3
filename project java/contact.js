document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // if (!currentUser) {
    //     alert('Please log in first.');
    //     window.location.href = 'login.html';
    //     return;
    // }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });

    const feedbackMessages = JSON.parse(localStorage.getItem('feedbackMessages')) || [];

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const feedback = { name, email, message };
        feedbackMessages.push(feedback);

        localStorage.setItem('feedbackMessages', JSON.stringify(feedbackMessages));

        document.getElementById('contactForm').reset();
        alert('Thank you for your feedback!');

        displayFeedbackMessages();
    });

    function displayFeedbackMessages() {
        const feedbackList = document.getElementById('feedbackList');
        feedbackList.innerHTML = '';

        feedbackMessages.forEach(feedback => {
            const li = document.createElement('li');
            li.textContent = `${feedback.name} (${feedback.email}): ${feedback.message}`;
            feedbackList.appendChild(li);
        });
    }

    displayFeedbackMessages();
});
