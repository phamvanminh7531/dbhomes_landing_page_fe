document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || '0s';
        el.style.transitionDelay = delay;
        el.classList.add("animated");
        obs.unobserve(el);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));
});
