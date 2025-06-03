document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');

      if (isActive) {
        faqItem.classList.remove('active');
        question.querySelector('.faq-toggle').textContent = '+';
      } else {
        faqItem.classList.add('active');
        question.querySelector('.faq-toggle').textContent = '−';
      }
    });
  });
});