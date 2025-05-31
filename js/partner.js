const sliderWrapper = document.querySelector('.partners-section .slider-wrapper');
const sliderTrack = document.querySelector('.partners-section .slider-track');

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

sliderWrapper.addEventListener('mousedown', dragStart);
sliderWrapper.addEventListener('touchstart', dragStart, { passive: true });

sliderWrapper.addEventListener('mouseup', dragEnd);
sliderWrapper.addEventListener('mouseleave', dragEnd);
sliderWrapper.addEventListener('touchend', dragEnd);

sliderWrapper.addEventListener('mousemove', dragAction);
sliderWrapper.addEventListener('touchmove', dragAction, { passive: false });

function dragStart(e) {
  isDragging = true;
  startX = getPositionX(e);
  sliderTrack.style.transition = 'none'; // bỏ animation khi kéo
  cancelAnimationFrame(animationID);
}

function dragEnd() {
  isDragging = false;
  prevTranslate = currentTranslate;
  sliderTrack.style.transition = 'transform 0.3s ease'; // thêm animation khi thả
  checkLoop();
}

function dragAction(e) {
  if (!isDragging) return;
  e.preventDefault();
  const currentPosition = getPositionX(e);
  const diff = currentPosition - startX;
  currentTranslate = prevTranslate + diff;
  setSliderPosition();
}

function getPositionX(event) {
  return event.type.includes('mouse')
    ? event.pageX
    : event.touches[0].clientX;
}

function setSliderPosition() {
  sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
}

// Xử lý lặp slider vô hạn:
// Khi kéo vượt trái hoặc phải, reset vị trí để tạo loop mượt

function checkLoop() {
  const slideWidth = sliderTrack.querySelector('.slide').offsetWidth;
  const slidesCount = sliderTrack.querySelectorAll('.slide').length;
  const visibleSlides = 7;
  const totalWidth = slideWidth * slidesCount;

  // Giới hạn dịch trái/phải theo chiều rộng slide nhân đôi
  // Nếu trượt quá 1 nửa (tập 1 trong 2 tập slide), reset vị trí

  if (currentTranslate > 0) {
    // kéo quá bên trái => reset về tập 2 (slide thứ 8)
    currentTranslate = -totalWidth / 2;
  } else if (currentTranslate < -totalWidth / 2) {
    // kéo quá bên phải => reset về đầu tập 1
    currentTranslate = 0;
  }
  prevTranslate = currentTranslate;
  setSliderPosition();
}
