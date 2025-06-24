document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("successModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  const consultationForm = document.getElementById("consultationForm");
  const contactForm = document.querySelector(".contact-section__form");

  // Hàm xử lý gửi form
  function handleFormSubmit(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      form.reset();
      modal.style.display = "flex";
    });
  }

  // Áp dụng cho từng form cụ thể
  if (consultationForm) {
    handleFormSubmit(consultationForm);
  }

  if (contactForm) {
    handleFormSubmit(contactForm);
  }

  // Đóng modal
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Đóng khi click ra ngoài
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
