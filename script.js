import data from './data.json' with { type: 'json' };

window.addEventListener('load', () => {
    // document.title = `${data.title} v${data.version}`;
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

        const translations = {
        en: {
            pageTitle: "Let's go work at the Chiang Mai office",
            headerTitle: "🧳 Off-site Work Announcement",
            cityBangkok: "🏢 Bangkok",
            cityChiangmai: "🏔️ Chiang Mai",
            datesTitle: "📅 Travel Schedule",
            datesInfo: `Bangkok → <a href="https://maps.app.goo.gl/KVdA1FDkBZQXFtiN6" target="_blank" rel="noopener noreferrer" class="location-link">Chiang Mai 📍</a><br><strong>October 25 – November 1, 2025</strong>`,
            voteTitle: "Sign up for the trip",
            countdownExpired: "<h3 style='padding: 10px 0; text-align: center; color: #c0392b;'>Registration has closed</h3>",
            voteDescription: "Please click the button below to access the registration form.",
            voteNote: `* The "Register" button will be disabled after the period ends.`,
            registerBtnText: "Open Form",
            resultsBtnText: "View Results",
            notesTitle: "📋 Notes",
            noteItem1: "Accommodation for sleeping is available at the Chiang Mai office.",
            noteItem2: "Those starting their journey after Oct 25 or wishing to return earlier, please plan your round trip yourself.",
            noteItem3: "<b>Important:</b> All travelers must request permission from their supervisors beforehand.",
            footerCredit: "By ใจง่าย Gang",
            labelDays: "Days",
            labelHours: "Hours",
            labelMinutes: "Minutes",
            labelSeconds: "Seconds",
            loadingText: "Traveling..."
        },
        th: {
            pageTitle: "ไปทำงานที่ออฟฟิศเชียงใหม่กัน",
            headerTitle: "🧳 ไปทำงานที่ออฟฟิศเชียงใหม่กัน",
            cityBangkok: "🏢 กรุงเทพฯ",
            cityChiangmai: "🏔️ เชียงใหม่",
            datesTitle: "📅 กำหนดการเดินทาง",
            datesInfo: `กรุงเทพฯ → <a href="https://maps.app.goo.gl/KVdA1FDkBZQXFtiN6" target="_blank" rel="noopener noreferrer" class="location-link">เชียงใหม่ 📍</a><br><strong>วันที่ 25 ตุลาคม – 1 พฤศจิกายน 2568</strong>`,
            voteTitle: "ลงชื่อเข้าร่วมการเดินทาง",
            countdownExpired: "<h3 style='padding: 10px 0; text-align: center; color: #c0392b;'>หมดเวลาลงทะเบียนแล้ว</h3>",
            voteDescription: "กรุณาคลิกปุ่มด้านล่างเพื่อไปยังฟอร์มสำหรับลงชื่อเข้าร่วมการเดินทาง",
            voteNote: `* ปุ่ม "เปิดฟอร์มลงทะเบียน" จะถูกปิดเมื่อสิ้นสุดระยะเวลา`,
            registerBtnText: "เปิดฟอร์มลงทะเบียน",
            resultsBtnText: "ดูผลลัพธ์",
            notesTitle: "📋 หมายเหตุ",
            noteItem1: "มีที่พักสำหรับการนอนภายในบริเวณออฟฟิศที่เชียงใหม่",
            noteItem2: "ผู้ที่เริ่มเดินทางภายหลังวันที่ 25 ตุลาคม หรือผู้ใดที่ประสงค์กลับก่อน กรุณาวางแผนการเดินทางไป–กลับด้วยตนเอง",
            noteItem3: "<b>สำคัญมาก:</b> ผู้ที่จะเดินทาง ขอความกรุณา ขออนุญาตหัวหน้าก่อน",
            footerCredit: "By ใจง่าย Gang",
            labelDays: "วัน",
            labelHours: "ชั่วโมง",
            labelMinutes: "นาที",
            labelSeconds: "วินาที",
            loadingText: "กำลังเดินทาง..."
        }
    };

    const langSwitcher = document.getElementById('langSwitcher');
    let currentLang = localStorage.getItem('lang') || 'th';

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                if (['datesInfo', 'noteItem3', 'countdownExpired'].includes(key)) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        langSwitcher.innerText = lang === 'th' ? 'EN' : 'TH';
    };

    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'th' ? 'en' : 'th';
        setLanguage(newLang);
    });

    setLanguage(currentLang); // Set initial language on load


    // Existing logic from DOMContentLoaded
    const musicToggleButton = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('background-music');
    const speakerOnIcon = musicToggleButton.querySelector('.icon-speaker-on');
    const speakerOffIcon = musicToggleButton.querySelector('.icon-speaker-off');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    const updateIcon = () => {
        if (backgroundMusic.paused) {
            speakerOnIcon.style.display = 'none';
            speakerOffIcon.style.display = 'flex';
        } else {
            speakerOnIcon.style.display = 'flex';
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

