document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("provinceSelect");

  fetch('https://provinces.open-api.vn/api/?depth=1')
    .then(response => response.json())
    .then(data => {
      data.forEach(province => {
        const option = document.createElement("option");
        option.value = province.name;
        option.textContent = province.name;
        select.appendChild(option);
      });
    })
    .catch(error => {
      console.error("Lỗi khi lấy danh sách tỉnh/thành:", error);
    });
});
