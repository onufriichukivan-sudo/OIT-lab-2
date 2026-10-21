// Кнопка "Нагору": показується після прокрутки на 300px
const scrollUp = document.getElementById('scroll-up');

function toggleScrollUp() {
  if (window.scrollY > 300) {
    scrollUp.hidden = false;
    // requestAnimationFrame, щоб спрацювала плавна поява
    requestAnimationFrame(() => scrollUp.classList.add('is-visible'));
  } else {
    scrollUp.classList.remove('is-visible');
    setTimeout(() => {
      if (window.scrollY <= 300) scrollUp.hidden = true;
    }, 250);
  }
}

window.addEventListener('scroll', toggleScrollUp, { passive: true });
toggleScrollUp();

scrollUp.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
