export function initMusic() {
  const musicToggleButton = document.getElementById('musicToggle');
  const backgroundMusic = document.getElementById('background-music');
  const speakerOnIcon = musicToggleButton.querySelector('.icon-speaker-on');
  const speakerOffIcon = musicToggleButton.querySelector('.icon-speaker-off');

  const updateIcon = () => {
    const isPlaying = !backgroundMusic.paused;
    speakerOnIcon.style.display = isPlaying ? 'flex' : 'none';
    speakerOffIcon.style.display = isPlaying ? 'none' : 'flex';
  };

  const tryPlayAudio = () => {
    backgroundMusic.play().catch(() => {
      const startOnInteraction = () => {
        backgroundMusic.play();
        document.body.removeEventListener('click', startOnInteraction);
        document.body.removeEventListener('touchstart', startOnInteraction);
      };
      document.body.addEventListener('click', startOnInteraction, { once: true });
      document.body.addEventListener('touchstart', startOnInteraction, { once: true });
    });
  };

  musicToggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    backgroundMusic.paused ? backgroundMusic.play() : backgroundMusic.pause();
  });

  backgroundMusic.addEventListener('play', updateIcon);
  backgroundMusic.addEventListener('pause', updateIcon);

  tryPlayAudio();
  updateIcon();
}
