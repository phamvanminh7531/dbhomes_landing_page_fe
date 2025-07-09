document.addEventListener("DOMContentLoaded", () => {
  const iconClasses = [
    "fa-solid fa-phone",
    "fab fa-facebook-messenger",
    "fa-solid fa-comment",
  ];

  const imageIcons = [
    "images/phone-icon.png",
    "images/messenger.png",
    "images/zalo.png",
  ];

  let current = 0;
  let menuOpen = false;

  const rotatingIcon = document.querySelector("#toggleMenu i");
  const toggleBtn = document.getElementById("toggleMenu");
  const menu = document.getElementById("contactMenu");

  const menuItems = document.querySelectorAll(".menu-item");

  // Đổi icon toggle mỗi 2s khi menu chưa mở
  setInterval(() => {
    if (!menuOpen) {
      rotatingIcon.className = "";
      rotatingIcon.innerHTML = "";
      rotatingIcon.className = iconClasses[current];
      rotatingIcon.style.color = "white";
      current = (current + 1) % iconClasses.length;
    }
  }, 2000);

  // Toggle menu mở/đóng
  toggleBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
      menu.style.display = "flex";

      // 🔁 Đổi icon trong menu-item thành ảnh
      menuItems.forEach((item, index) => {
        const iconEl = item.querySelector("i, img");
        if (iconEl) {
          iconEl.outerHTML = `<img src="${imageIcons[index]}" alt="icon" style="width: 20px; height: 20px; margin-right: 8px;" />`;
        }
      });
    } else {
      menu.style.display = "none";

      // 🔁 Khôi phục lại icon Font Awesome trong menu-item
      menuItems.forEach((item, index) => {
        const imgEl = item.querySelector("img");
        if (imgEl) {
          imgEl.outerHTML = `<i class="${iconClasses[index]}" style="color:white; margin-right: 8px;"></i>`;
        }
      });
    }
  });
});
