// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Simple form validation before submission
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name === '' || message === '') {
        alert('Please fill out both fields.');
        event.preventDefault(); // Prevent form from submitting
    } else {
        alert('Thank you for reaching out!');
    }
});
