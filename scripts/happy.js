// happy.js

// JavaScript code to handle the click event on the cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const paragraph = card.querySelector('p');
            if (paragraph.style.display === 'block') {
                paragraph.style.display = 'none';
            } else {
                paragraph.style.display = 'block';
            }
        });
    });
});

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}