document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        { link: document.querySelector('a[href="#upcoming"]'), section: document.getElementById('upcoming') },
        { link: document.querySelector('a[href="#about"]'), section: document.getElementById('about') },
        { link: document.querySelector('a[href="#contact"]'), section: document.getElementById('contact') },
    ];

    const slider = document.querySelector('.slider');
    const sectionLinks = document.getElementById('section-links'); // Add this line

    sections.forEach(item => {
        item.section.style.display = 'none';

        item.link.addEventListener('click', () => {
            sections.forEach(otherItem => {
                if (otherItem.section !== item.section) {
                    otherItem.section.style.display = 'none';
                }
            });
            toggleSection(item.section);
            slider.style.display = 'none';
            sectionLinks.style.display = 'none'; // Add this line
        });
    });

    const toggleSection = (section) => {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    };
});
