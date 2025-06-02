document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('prankButton');
    const image = document.getElementById('prankImage');
    const audio = document.getElementById('prankAudio');

    button.addEventListener('click', () => {
        image.style.display = 'block';
        audio.play();
    });
});
