export function initLoader() {
  const loader = document.getElementById('loader-wrapper');
  const posterContainer = document.querySelector('.poster-container');

  setTimeout(() => {
    document.body.classList.add('loaded');
    posterContainer.style.visibility = 'visible';

    // remove loader after fade-out
    setTimeout(() => loader?.remove(), 750);
  }, 3000);
}
