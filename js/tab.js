document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(
    ".product-listing-section__tabs button"
  );

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' to clicked button
      button.classList.add("active");
    });
  });
});