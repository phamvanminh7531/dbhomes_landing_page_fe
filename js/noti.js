document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consultationForm");
  const modal = document.getElementById("successModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();
    modal.style.display = "flex"; // chỉ hiển thị sau khi submit thành công
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
