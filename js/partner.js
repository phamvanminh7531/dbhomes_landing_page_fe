document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.partner-logos');
  const logos = slider.querySelectorAll('a');
  let isDown = false;
  let startX;
  let scrollLeft;
  let ticking = false;
  let logoWidth = 0;
  let autoSlideInterval;

  function getLogoWidth() {
    if (logos.length > 0) {
      const style = window.getComputedStyle(logos[0]);
      const marginRight = parseInt(style.marginRight) || 0;
      return logos[0].offsetWidth + marginRight;
    }
    return 0;
  }

  // Tạo hiệu ứng trượt mượt và chậm
  function smoothScrollBy(element, distance, duration) {
    const start = element.scrollLeft;
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeOutQuint(progress);
      element.scrollLeft = start + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  // Hàm easing để cuộn mềm mại hơn
function easeOutQuint(t) {
  return 1 - Math.pow(1 - t, 5);
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => {
    if (!isDown) {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft + logoWidth >= maxScroll - 1) {
        // Trượt đến cuối logo mượt
        smoothScrollBy(slider, maxScroll - slider.scrollLeft, 1000);
        
        // Sau khi trượt xong 1 giây thì reset về đầu ngay lập tức (không animate)
        setTimeout(() => {
          slider.scrollLeft = 0;
        }, 1000);
      } else {
        smoothScrollBy(slider, logoWidth, 1500); // Trượt sang logo tiếp theo
      }
    }
  }, 3500);
}


  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
    stopAutoSlide();
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
    startAutoSlide();
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
    startAutoSlide();
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX);
        slider.scrollLeft = scrollLeft - walk;
        ticking = false;
      });
      ticking = true;
    }
  });

  function resizePartnerLogos() {
    logoWidth = getLogoWidth();
  }

  window.addEventListener('load', () => {
    resizePartnerLogos();
    startAutoSlide();
  });

  window.addEventListener('resize', resizePartnerLogos);
});
