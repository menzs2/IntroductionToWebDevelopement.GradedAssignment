const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});

const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function (event) {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value;

    if (nameValue === '') {
        event.preventDefault();
        alert('Please enter your name.');
        return;
    }

    if (!validateEmail(emailValue)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Search functionality
const searchInput = document.getElementById('search');
const projectArticles = document.querySelectorAll('#Projects article');

searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.toLowerCase();
    projectArticles.forEach(function (article) {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const description = article.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchValue) || description.includes(searchValue)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});