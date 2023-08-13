document.addEventListener('DOMContentLoaded', function () {
    const performanceLink = document.getElementById('performance-link');
    const soundArtLink = document.getElementById('sound-art-link');
    const multimediaLink = document.getElementById('multimedia-link');
    
    const performanceSection = document.getElementById('performance');
    const soundArtSection = document.getElementById('sound-art');
    const multimediaSection = document.getElementById('multimedia');
    
    const toggleSection = (section) => {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    };
    
    performanceLink.addEventListener('click', () => {
        toggleSection(performanceSection);
    });
    
    soundArtLink.addEventListener('click', () => {
        toggleSection(soundArtSection);
    });
    
    multimediaLink.addEventListener('click', () => {
        toggleSection(multimediaSection);
    });
});
