// Áp dụng cho tất cả slide-info
document.querySelectorAll('.slide-wrapper').forEach((wrapper) => {
  const info = wrapper.querySelector('.slide-info');

  wrapper.addEventListener('mouseenter', () => {
    info.style.marginBottom = '15px';
  });

  wrapper.addEventListener('mouseleave', () => {
    // Đợi phần slide-description co lại xong (giả sử 1s)
    setTimeout(() => {
      info.style.marginBottom = '19px';
    }, 1000); // delay khớp với transition của .slide-description
  });
});
