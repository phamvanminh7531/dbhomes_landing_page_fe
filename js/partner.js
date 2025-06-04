document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.partner-logos');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });
});

function resizePartnerLogos() {
  const container = document.querySelector('.partner-logos');
  const imgs = container.querySelectorAll('img');
  const gap = 20;
  const visibleCount = 7;

  const containerWidth = container.clientWidth;
  const totalGapWidth = gap * (visibleCount - 1);
  const logoWidth = (containerWidth - totalGapWidth) / visibleCount;

  imgs.forEach(img => {
    img.style.width = `${logoWidth}px`;
    img.style.flex = `0 0 ${logoWidth}px`;
  });
}

window.addEventListener('load', resizePartnerLogos);
window.addEventListener('resize', resizePartnerLogos);
