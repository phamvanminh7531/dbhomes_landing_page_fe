  window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    if (!loadingScreen) return;

    loadingScreen.style.transition = "opacity 0.5s ease";
    loadingScreen.style.opacity = "0";

    setTimeout(() => loadingScreen.remove(), 500);
  });

//   window.addEventListener("load", function () {
//   const loadingScreen = document.getElementById("loading-screen");
//   if (!loadingScreen) return;

//   // Chờ animation fade-out hoàn tất
//   function hideLoading() {
//     loadingScreen.style.transition = "opacity 0.5s ease";
//     loadingScreen.style.opacity = "0";

//     // Xóa loading sau khi hiệu ứng hoàn tất
//     setTimeout(() => {
//       loadingScreen.remove();
//     }, 500);
//   }

//   // Chờ 1 frame để đảm bảo layout ổn định
//   requestAnimationFrame(() => {
//     requestAnimationFrame(hideLoading);
//   });

//   // Fallback: Tự động remove sau 10s nếu có lỗi media không load được
//   setTimeout(() => {
//     if (document.body.contains(loadingScreen)) {
//       hideLoading();
//     }
//   }, 10000);
// });
