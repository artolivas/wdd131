document.addEventListener('DOMContentLoaded', () => {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005-08-07",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888-05-21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015-06-07",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020-05-02",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974-11-19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986-01-10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983-12-02",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Manhattan New York Temple",
            location: "New York, New York, United States",
            dedicated: "2004-06-13",
            area: 20630,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
        },
        {
            templeName: "Houston Texas Temple",
            location: "Klein, Texas, United States",
            dedicated: "2000-08-26",
            area: 33970,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/houston-texas-temple/houston-texas-temple-23480-main.jpg"
        },
        {
            templeName: "Mesa Arizona Temple",
            location: "Mesa, Arizona, United States",
            dedicated: "1927-10-23",
            area: 33970,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg"
        },
    ];

    const templeGallery = document.getElementById('temple-gallery');

    function displayTemples(filter) {
        templeGallery.innerHTML = ''; // Clear the gallery

        let filteredTemples = temples;

        if (filter === 'old') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        } else if (filter === 'new') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
        } else if (filter === 'large') {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        } else if (filter === 'small') {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        }

        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');
            templeCard.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
            `;
            templeGallery.appendChild(templeCard);
        });
    }

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.getAttribute('data-filter');
            displayTemples(filter);
        });
    });

    // Display all temples by default
    displayTemples('all');

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰';
        header.classList.toggle('menu-open');
    });

    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModified;
});
