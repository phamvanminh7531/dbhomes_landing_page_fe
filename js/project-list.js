document.addEventListener('DOMContentLoaded', function () {
  const paginationContainer = document.querySelector('.projects-section__pagination');
  const paginationLinks = paginationContainer.querySelectorAll('a');

  paginationLinks.forEach((link, index) => {
    if (!link.classList.contains('projects-section__arrow')) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        setActiveLink(this);
      });
    } else {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        handleArrowClick(this);
      });
    }
  });

  function setActiveLink(link) {
    const current = paginationContainer.querySelector('a.active');
    if (current) current.classList.remove('active');
    link.classList.add('active');
  }

  function handleArrowClick(arrow) {
    const current = paginationContainer.querySelector('a.active');
    if (!current) return;

    const links = Array.from(paginationContainer.querySelectorAll('a'))
      .filter(a => !a.classList.contains('projects-section__arrow'));

    const currentIndex = links.indexOf(current);

    if (arrow.textContent.trim() === '<' && currentIndex > 0) {
      setActiveLink(links[currentIndex - 1]);
    }

    if (arrow.textContent.trim() === '>' && currentIndex < links.length - 1) {
      setActiveLink(links[currentIndex + 1]);
    }
  }
});
function equalizeHeights() {
  const itemsPerRow = 3; // Số item mỗi hàng
  const items = document.querySelectorAll('.projects-section__item');
  
  // Reset tất cả height về auto trước khi tính toán lại
  ['.projects-section__title', '.projects-section__desc', '.projects-section__link'].forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.style.height = 'auto');
  });

  for (let i = 0; i < items.length; i += itemsPerRow) {
    // Lấy từng nhóm 3 phần tử trên 1 hàng
    const rowItems = Array.from(items).slice(i, i + itemsPerRow);

    // Cho từng thành phần con (title, desc, link)
    ['.projects-section__title', '.projects-section__desc', '.projects-section__link'].forEach(selector => {
      let maxHeight = 0;
      
      // Tính chiều cao lớn nhất
      rowItems.forEach(item => {
        const el = item.querySelector(selector);
        if (el) {
          const height = el.offsetHeight;
          if (height > maxHeight) maxHeight = height;
        }
      });

      // Set chiều cao bằng nhau cho tất cả item trong hàng đó
      rowItems.forEach(item => {
        const el = item.querySelector(selector);
        if (el) {
          el.style.height = maxHeight + 'px';
        }
      });
    });
  }
}

// Chạy khi load trang và khi resize
window.addEventListener('load', equalizeHeights);
window.addEventListener('resize', equalizeHeights);
