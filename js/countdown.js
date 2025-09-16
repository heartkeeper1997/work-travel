export function initCountdown() {
  const countdownDate = new Date("2025-10-20T00:00:00").getTime();
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const countdownContainer = document.getElementById('countdown');
  const voteButtonsContainer = document.getElementById('voteButtons');
  const registerBtn = document.getElementById('registerBtn');

  const updateCountdown = () => {
    const now = Date.now();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(timer);
      countdownContainer.innerHTML =
        `<h3 style="padding:10px 0;text-align:center;color:#c0392b;">หมดเวลาลงทะเบียนแล้ว</h3>`;
      registerBtn?.classList.add('disabled');
      registerBtn?.removeAttribute('href');
      if (registerBtn) registerBtn.style.display = 'none';
      if (voteButtonsContainer) voteButtonsContainer.style.justifyContent = 'center';
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

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
}
