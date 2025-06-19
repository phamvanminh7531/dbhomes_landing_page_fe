document.addEventListener('DOMContentLoaded', function () {
  // Tạo toast khi DOM sẵn sàng
  const toast = document.createElement('div');
  toast.className = 'toast';
  document.body.appendChild(toast);

  const facebookBtn = document.getElementById('facebook-share');
  const copyBtn = document.getElementById('copy-share');

facebookBtn.addEventListener('click', function() {
  const currentUrl = encodeURIComponent(window.location.href);
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
  window.open(facebookShareUrl, '_blank', 'width=600,height=400');
});

  copyBtn.addEventListener('click', function() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        showToast('Link copied to clipboard!');
      })
      .catch(err => {
        console.error('Error copying link: ', err);
        showToast('Failed to copy link!');
      });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
});
