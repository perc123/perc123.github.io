document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        { link: document.querySelector('a[href="#upcoming"]'), section: document.getElementById('upcoming') },
        { link: document.querySelector('a[href="#about"]'), section: document.getElementById('about') },
        { link: document.querySelector('a[href="#contact"]'), section: document.getElementById('contact') },
        /* { link: document.querySelector('a[href="#performance"]'), section: document.getElementById('performance') },
        { link: document.querySelector('a[href="#sound-art"]'), section: document.getElementById('sound-art') },
        { link: document.querySelector('a[href="#multimedia"]'), section: document.getElementById('multimedia') }, */
    ];

    sections.forEach(item => {
        item.section.style.display = 'none';

        item.link.addEventListener('click', () => {
            sections.forEach(otherItem => {
                if (otherItem.section !== item.section) {
                    otherItem.section.style.display = 'none';
                }
            });
            toggleSection(item.section);
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
