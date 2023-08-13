document.addEventListener('DOMContentLoaded', function () {
    const performanceImage = document.querySelector('#performance img');
    const soundArtImage = document.querySelector('#sound-art img');
    const multimediaImage = document.querySelector('#multimedia img');

    const performanceSection = document.getElementById('performance');
    const soundArtSection = document.getElementById('sound-art');
    const multimediaSection = document.getElementById('multimedia');

    performanceSection.style.display = 'none';
    soundArtSection.style.display = 'none';
    multimediaSection.style.display = 'none';

    performanceImage.addEventListener('click', () => {
        toggleSection(performanceSection);
    });

    soundArtImage.addEventListener('click', () => {
        toggleSection(soundArtSection);
    });

    multimediaImage.addEventListener('click', () => {
        toggleSection(multimediaSection);
    });

    const toggleSection = (section) => {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    };
});
