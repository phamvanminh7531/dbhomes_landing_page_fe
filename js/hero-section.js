window.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true });

  setTimeout(() => {
    const title = document.getElementById('main-title');
    if (title) {
      title.classList.add('active');
    }
  }, 1200); // lúc nền bắt đầu hiện ra
});
