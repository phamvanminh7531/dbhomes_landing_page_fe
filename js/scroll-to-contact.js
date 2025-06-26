function scrollToContactWhenReady() {
  console.log("[scrollToContactWhenReady] ✅ Bắt đầu...");

  const section = document.getElementById("contact");
  if (!section) return;

  const bgUrl = getComputedStyle(section).backgroundImage.replace(/url\(["']?(.*?)["']?\)/, '$1');
  const waitForImage = new Promise((resolve) => {
    if (!bgUrl || bgUrl === "none") return resolve();

    const img = new Image();
    img.onload = () => {
      console.log("[scrollToContactWhenReady] ✅ Ảnh nền đã load xong");
      resolve();
    };
    img.onerror = resolve;
    img.src = bgUrl;

    if (img.complete) {
      console.log("[scrollToContactWhenReady] ✅ Ảnh đã cache sẵn");
      resolve();
    }
  });

  waitForImage.then(() => {
    const navbarHeight = 75;
    const expectedOffset = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    let stableCount = 0;
    let prevTop = null;
    let frame = 0;

    const waitUntilStable = () => {
      const rect = section.getBoundingClientRect();
      const currentTop = rect.top + window.scrollY;

      if (prevTop !== null && Math.abs(currentTop - prevTop) < 1) {
        stableCount++;
        console.log(`⏱ Frame ${frame}: ✅ Stable (${stableCount}/5)`);
      } else {
        stableCount = 0;
        console.log(`⏱ Frame ${frame}: ❌ Not stable`);
      }

      prevTop = currentTop;
      frame++;

      if (stableCount >= 5) {
        console.log(`🎯 Đã ổn định. Scroll tới: ${expectedOffset}`);

        window.scrollTo({
          top: expectedOffset,
          behavior: 'smooth'
        });

        // 🔁 Kiểm tra sau khi scroll để đảm bảo không bị lệch
        setTimeout(() => {
          const actual = window.scrollY;
          const diff = Math.abs(actual - expectedOffset);
          if (diff > 2) {
            console.warn(`⚠️ Scroll bị lệch ${diff}px → Scroll lại...`);
            window.scrollTo({
              top: expectedOffset,
              behavior: 'smooth'
            });
          } else {
            console.log("✅ Scroll chính xác!");
          }
        }, 600); // chờ sau khi scroll mượt xong
      } else {
        requestAnimationFrame(waitUntilStable);
      }
    };

    requestAnimationFrame(waitUntilStable);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", scrollToContactWhenReady);
  }
});
