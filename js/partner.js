document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.partner-logos');
  let isDown = false;
  let startX;
  let scrollLeft;
  let ticking = false;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1;  // điều chỉnh hệ số cho phù hợp
        slider.scrollLeft = scrollLeft - walk;
        ticking = false;
      });
      ticking = true;
    }
  });
});


function resizePartnerLogos() {
  const container = document.querySelector('.partner-logos');
  const imgs = container.querySelectorAll('img');
  const gap = 15;
  const visibleCount = 7;

  const style = getComputedStyle(container);
  const paddingLeft = parseFloat(style.paddingLeft);
  const paddingRight = parseFloat(style.paddingRight);

  const containerWidth = container.clientWidth - paddingLeft - paddingRight;
  const totalGapWidth = gap * (visibleCount - 1);
  const logoWidth = (containerWidth - totalGapWidth) / visibleCount;

  imgs.forEach(img => {
    img.style.width = `${logoWidth}px`;
    img.style.flex = `0 0 ${logoWidth}px`;
  });
}


window.addEventListener('load', resizePartnerLogos);
window.addEventListener('resize', resizePartnerLogos);
