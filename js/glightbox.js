document.addEventListener('DOMContentLoaded', function () {
  // Quét toàn bộ ảnh trong phần nội dung chính
  document.querySelectorAll('.project-detail__main img').forEach(function(img) {
    img.classList.add('glightbox');
    // KHÔNG thêm data-title nữa -> để mặc định GLightbox lấy alt làm title
  });

  // Khởi tạo GLightbox
  const lightbox = GLightbox({
    selector: '.glightbox'
  });
});