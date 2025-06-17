document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth <= 768) {
    document.querySelectorAll('[data-aos]').forEach(el => {
      const original = el.getAttribute('data-aos');
      if (original === 'fade-left' || original === 'fade-right') {
        el.removeAttribute('data-aos');         // Xoá cũ
        el.setAttribute('data-aos', 'fade-up'); // Gán mới
      }
    });
  }

  // PHẢI init sau khi thay đổi xong data-aos
  AOS.init();
});
