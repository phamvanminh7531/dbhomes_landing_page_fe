document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("requirementSelect");
  const otherInput = document.getElementById("otherInput");

  select.addEventListener("change", function () {
    if (this.value === "Khác") {
      otherInput.style.display = "block";
      otherInput.required = true;

      // Giảm padding khi chọn Khác
      select.classList.add("select--compact");
    } else {
      otherInput.style.display = "none";
      otherInput.required = false;
      otherInput.value = "";

      // Trả lại padding bình thường
      select.classList.remove("select--compact");
    }
  });
});
