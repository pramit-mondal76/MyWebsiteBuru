let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("show"));
  slides[index].classList.add("show");
}

// Next/Prev Buttons
nextBtn.addEventListener("click", function () {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
});

prevBtn.addEventListener("click", function () {
  current--;
  if (current < 0) current = slides.length - 1;
  showSlide(current);
});

// Auto Slide every 4 seconds
setInterval(() => {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
}, 4000);

// ❤️ Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';
  heart.style.width = heart.style.height = (10 + Math.random() * 20) + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);
