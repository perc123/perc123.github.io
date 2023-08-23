document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        { link: document.querySelector('a[href="index.html#upcoming"]'), section: document.getElementById('upcoming') },
        { link: document.querySelector('a[href="index.html#about"]'), section: document.getElementById('about') },
        { link: document.querySelector('a[href="index.html#contact"]'), section: document.getElementById('contact') },
    ];

    const slider = document.querySelector('.slider');
    const sectionLinks = document.getElementById('section-links');

    sections.forEach((item, index) => {
        item.section.style.display = 'none';

        item.link.addEventListener('click', () => {
            sections.forEach(otherItem => {
                if (otherItem.section !== item.section) {
                    otherItem.section.style.display = 'none';
                }
            });
            toggleSection(item.section);
            slider.style.display = 'none';
            sectionLinks.style.display = 'none';
            updateSectionStyles(index); // Update section styles when a section link is clicked
        });
    });

    const toggleSection = (section) => {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    };

    const navigationAuto = document.querySelector('.navigation-auto');
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const radio3 = document.getElementById('radio3');
    const performanceLink = document.querySelector('a[href="pages/performance/performance.html"]');
    const soundLink = document.querySelector('a[href="pages/sound/sound.html"]');
    const multimediaLink = document.querySelector('a[href="pages/multimedia/multimedia.html"]');
    const performance = document.getElementById('performance');
    const sound = document.getElementById('sound');
    const multimedia = document.getElementById('multimedia');

    performance.style.fontWeight = 'normal';
    sound.style.fontWeight = 'normal';
    multimedia.style.fontWeight = 'normal';

    navigationAuto.addEventListener('change', () => {
        performance.style.fontWeight = 'normal';
        sound.style.fontWeight = 'normal';
        multimedia.style.fontWeight = 'normal';

        if (radio1.checked) {
            performance.style.fontWeight = 'bold';
        }
        if (radio2.checked) {
            sound.style.fontWeight = 'bold';
        }
        if (radio3.checked) {
            multimedia.style.fontWeight = 'bold';
        }
    });
});
