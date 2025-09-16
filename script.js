window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    const posterContainer = document.querySelector('.poster-container');
    
    // Delay for 3 seconds to ensure loader animation is visible
    setTimeout(() => {
        document.body.classList.add('loaded');
        posterContainer.style.visibility = 'visible';

        // Remove the loader from the DOM after the fade-out transition ends
        setTimeout(() => {
            if(loader) {
                loader.remove();
            }
        }, 750); // This duration should match the transition in loader.css
    }, 3000); // 3-second delay

    // Existing logic from DOMContentLoaded
    const musicToggleButton = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('background-music');
    const speakerOnIcon = musicToggleButton.querySelector('.icon-speaker-on');
    const speakerOffIcon = musicToggleButton.querySelector('.icon-speaker-off');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    const updateIcon = () => {
        if (backgroundMusic.paused) {
            speakerOnIcon.style.display = 'none';
            speakerOffIcon.style.display = 'inline-block';
        } else {
            speakerOnIcon.style.display = 'inline-block';
            speakerOffIcon.style.display = 'none';
        }
    };
    
    const startAudio = () => {
        const playPromise = backgroundMusic.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("Audio is playing automatically.");
                updateIcon();
            }).catch(error => {
                console.log("Autoplay was prevented. Waiting for a click to start audio.");
                const startAudioOnInteraction = () => {
                    backgroundMusic.play();
                    document.body.removeEventListener('click', startAudioOnInteraction);
                    document.body.removeEventListener('touchstart', startAudioOnInteraction);
                };
                document.body.addEventListener('click', startAudioOnInteraction, { once: true });
                document.body.addEventListener('touchstart', startAudioOnInteraction, { once: true });
            });
        }
    };
    
    startAudio();


    musicToggleButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    });
    
    backgroundMusic.addEventListener('play', updateIcon);
    backgroundMusic.addEventListener('pause', updateIcon);
    
    // Countdown Timer Logic
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownContainer = document.getElementById('countdown');
    const voteButtonsContainer = document.getElementById('voteButtons');
    const registerBtn = document.getElementById('registerBtn');

    const countdownDate = new Date("2025-10-25T00:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownContainer.innerHTML = "<h3 style='padding: 10px 0; text-align: center; color: #c0392b;'>หมดเวลาลงทะเบียนแล้ว</h3>";
            if(registerBtn) {
               registerBtn.classList.add('disabled');
               registerBtn.removeAttribute('href');
               registerBtn.style.display = 'none';
            }
            if(voteButtonsContainer) {
                voteButtonsContainer.style.justifyContent = 'center';
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = String(days).padStart(2, '0');
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');
        secondsEl.innerText = String(seconds).padStart(2, '0');
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); 
    updateIcon(); 

    // Scroll to Top Button Logic
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

