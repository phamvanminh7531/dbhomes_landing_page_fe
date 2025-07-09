document.addEventListener("DOMContentLoaded", () => {
  const iconClasses = [
    "fa-solid fa-phone",
    "fab fa-facebook-messenger",
    "fa-solid fa-comment",
    // "zalo-icon" // lớp tùy chỉnh cho Zalo icon ảnh
  ];

  let current = 0;

  const rotatingIcon = document.querySelector("#toggleMenu i");
  const toggleBtn = document.getElementById("toggleMenu");
  const menu = document.getElementById("contactMenu");

  setInterval(() => {
    // Xóa toàn bộ class cũ
    rotatingIcon.className = "";

    if (iconClasses[current] === "zalo-icon") {
      rotatingIcon.classList.add("zalo-icon");
    } else {
      rotatingIcon.className = iconClasses[current];
      rotatingIcon.style.color = "white";
    }

    current = (current + 1) % iconClasses.length;
  }, 2000);

  toggleBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });
});
