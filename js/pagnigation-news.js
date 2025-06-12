document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.querySelector('.project-list'); // từ 'projects-section'
  const projectCards = projectList.querySelectorAll('.project-card'); // từ 'projects-section__item'
  const pagination = document.querySelector('.projects-section__pagination');
  const prevArrow = pagination.querySelector('.projects-section__arrow:first-child');
  const nextArrow = pagination.querySelector('.projects-section__arrow:last-child');

  let itemsPerPage = getItemsPerPage();
  let currentPage = 1;
  let totalPages = Math.ceil(projectCards.length / itemsPerPage);
  let pageLinks = [];
  function getItemsPerPage() {
    return window.innerWidth <= 768 ? 1 : 12;
  }

  function setupPagination() {
    pagination.querySelectorAll('a:not(.projects-section__arrow)').forEach(el => el.remove());
    itemsPerPage = getItemsPerPage();
    totalPages = Math.ceil(projectCards.length / itemsPerPage);
    pageLinks = [];

    const maxVisible = 5;
    const range = Math.floor(maxVisible / 2);

    function createPageLink(pageNum, text = pageNum) {
      const pageLink = document.createElement('a');
      pageLink.href = '#';
      pageLink.textContent = text;
      if (pageNum === currentPage) pageLink.classList.add('active');
      pagination.insertBefore(pageLink, nextArrow);

      if (text !== '...') {
        pageLink.addEventListener('click', (e) => {
          e.preventDefault();
          showPage(pageNum);
        });
        pageLinks.push(pageLink);
      }
    }

    const pages = new Set();
    pages.add(1);
    pages.add(totalPages);

    let start = Math.max(currentPage - range, 2);
    let end = Math.min(currentPage + range, totalPages - 1);

    for (let i = start; i <= end; i++) {
      pages.add(i);
    }

    const sortedPages = Array.from(pages).sort((a, b) => a - b);

    let lastPage = 0;
    sortedPages.forEach(p => {
      if (lastPage && p - lastPage > 1) {
        createPageLink(null, '...');
      }
      createPageLink(p);
      lastPage = p;
    });
  }

  function showPage(pageNumber) {
    currentPage = pageNumber;

    projectCards.forEach((card, index) => {
      const page = Math.floor(index / itemsPerPage) + 1;
      card.style.display = (page === pageNumber) ? 'block' : 'none';
    });

    setupPagination();
    pageLinks.forEach(link => {
      if (link.textContent === String(pageNumber)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({
      top: window.innerWidth <= 768
        ? projectList.offsetTop + 50
        : projectList.offsetTop - 60,
      behavior: 'smooth'
    });
  }

  prevArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  });

  nextArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      showPage(currentPage + 1);
    }
  });

  window.addEventListener('resize', () => {
    const newItemsPerPage = getItemsPerPage();
    if (newItemsPerPage !== itemsPerPage) {
      currentPage = 1;
      setupPagination();
      showPage(currentPage);
    }
  });
  setupPagination();
  showPage(currentPage);
});
