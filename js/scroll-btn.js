const scrollBtn = document.getElementById("scrollToTopBtn");


window.onscroll = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Khi nhấn nút
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
