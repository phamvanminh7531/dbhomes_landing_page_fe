document.addEventListener("DOMContentLoaded", () => {
  const iconClasses = [
    "fa-solid fa-phone",
    "fab fa-facebook-messenger",
    "zalo",
  ];

  // SVG fill trắng, không cần chỉnh HTML
  const svgPaths = [
    // Điện thoại
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="white"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>`,
    // Messenger
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="white"><path d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"/></svg>`,
    // Zalo (giữ nguyên cho ví dụ)
    `<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="white" viewBox="0 0 460.1 436.6"><path class="st0" d="M82.6 380.9c-1.8-.8-3.1-1.7-1-3.5 1.3-1 2.7-1.9 4.1-2.8 13.1-8.5 25.4-17.8 33.5-31.5 6.8-11.4 5.7-18.1-2.8-26.5C69 269.2 48.2 212.5 58.6 145.5 64.5 107.7 81.8 75 107 46.6c15.2-17.2 33.3-31.1 53.1-42.7 1.2-.7 2.9-.9 3.1-2.7-.4-1-1.1-.7-1.7-.7-33.7 0-67.4-.7-101 .2C28.3 1.7.5 26.6.6 62.3c.2 104.3 0 208.6 0 313 0 32.4 24.7 59.5 57 60.7 27.3 1.1 54.6.2 82 .1 2 .1 4 .2 6 .2H290c36 0 72 .2 108 0 33.4 0 60.5-27 60.5-60.3v-.6-58.5c0-1.4.5-2.9-.4-4.4-1.8.1-2.5 1.6-3.5 2.6-19.4 19.5-42.3 35.2-67.4 46.3-61.5 27.1-124.1 29-187.6 7.2-5.5-2-11.5-2.2-17.2-.8-8.4 2.1-16.7 4.6-25 7.1-24.4 7.6-49.3 11-74.8 6zm72.5-168.5c1.7-2.2 2.6-3.5 3.6-4.8 13.1-16.6 26.2-33.2 39.3-49.9 3.8-4.8 7.6-9.7 10-15.5 2.8-6.6-.2-12.8-7-15.2-3-.9-6.2-1.3-9.4-1.1-17.8-.1-35.7-.1-53.5 0-2.5 0-5 .3-7.4.9-5.6 1.4-9 7.1-7.6 12.8 1 3.8 4 6.8 7.8 7.7 2.4.6 4.9.9 7.4.8 10.8.1 21.7 0 32.5.1 1.2 0 2.7-.8 3.6 1-.9 1.2-1.8 2.4-2.7 3.5-15.5 19.6-30.9 39.3-46.4 58.9-3.8 4.9-5.8 10.3-3 16.3s8.5 7.1 14.3 7.5c4.6.3 9.3.1 14 .1 16.2 0 32.3.1 48.5-.1 8.6-.1 13.2-5.3 12.3-13.3-.7-6.3-5-9.6-13-9.7-14.1-.1-28.2 0-43.3 0zm116-52.6c-12.5-10.9-26.3-11.6-39.8-3.6-16.4 9.6-22.4 25.3-20.4 43.5 1.9 17 9.3 30.9 27.1 36.6 11.1 3.6 21.4 2.3 30.5-5.1 2.4-1.9 3.1-1.5 4.8.6 3.3 4.2 9 5.8 14 3.9 5-1.5 8.3-6.1 8.3-11.3.1-20 .2-40 0-60-.1-8-7.6-13.1-15.4-11.5-4.3.9-6.7 3.8-9.1 6.9zm69.3 37.1c-.4 25 20.3 43.9 46.3 41.3 23.9-2.4 39.4-20.3 38.6-45.6-.8-25-19.4-42.1-44.9-41.3-23.9.7-40.8 19.9-40 45.6zm-8.8-19.9c0-15.7.1-31.3 0-47 0-8-5.1-13-12.7-12.9-7.4.1-12.3 5.1-12.4 12.8-.1 4.7 0 9.3 0 14v79.5c0 6.2 3.8 11.6 8.8 12.9 6.9 1.9 14-2.2 15.8-9.1.3-1.2.5-2.4.4-3.7.2-15.5.1-31 .1-46.5z"></path></svg>`
  ];

  const bgColors = ["#8B4513", "#0078FF", "#2EA8FF"]; // Nâu, xanh, xanh nhạt
  let current = 0;
  let menuOpen = false;

  const rotatingIcon = document.querySelector("#toggleMenu i");
  const toggleBtn = document.getElementById("toggleMenu");
  const menu = document.getElementById("contactMenu");
  const menuItems = document.querySelectorAll(".menu-item");

  // Icon xoay tự động
  setInterval(() => {
    if (!menuOpen) {
      rotatingIcon.className = "";
      rotatingIcon.innerHTML = "";
      rotatingIcon.className = iconClasses[current];
      rotatingIcon.style.color = "white";
      current = (current + 1) % iconClasses.length;
    }
  }, 2000);

  // Toggle menu
  toggleBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
      menu.style.display = "flex";

menuItems.forEach((item, index) => {
  const oldIcon = item.querySelector("i, svg, .icon-wrapper, img");
  if (oldIcon) oldIcon.remove();

  const wrapper = document.createElement("div");
  wrapper.className = "icon-wrapper";
  wrapper.style.width = "36px";
  wrapper.style.height = "36px";
  wrapper.style.borderRadius = "50%";
  wrapper.style.display = "inline-flex";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "center";
  wrapper.style.marginRight = "8px";
  wrapper.style.backgroundColor = bgColors[index];

  wrapper.innerHTML = svgPaths[index]; // ✅ Dùng SVG cho tất cả

  item.insertBefore(wrapper, item.firstChild);
});
    } else {
      menu.style.display = "none";

      menuItems.forEach((item, index) => {
        const customIcon = item.querySelector(".icon-wrapper");
        if (customIcon) customIcon.remove();

        const faIcon = document.createElement("i");
        faIcon.className = iconClasses[index];
        faIcon.style.color = "white";
        faIcon.style.marginRight = "8px";

        item.insertBefore(faIcon, item.firstChild);
      });
    }
  });
});
