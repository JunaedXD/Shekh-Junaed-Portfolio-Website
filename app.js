const slider2 = document.querySelector(".projects-slider");
document.querySelector(".shield-btn.left").addEventListener("click", () => {
  slider2.scrollBy({ left: -300, behavior: "smooth" });
});
document.querySelector(".shield-btn.right").addEventListener("click", () => {
  slider2.scrollBy({ left: 300, behavior: "smooth" });
});

const paragraph = document.querySelector(".animated-text");
const words = paragraph.textContent.trim().split(/\s+/);
paragraph.textContent = "";

words.forEach((word, i) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.animationDelay = `${i * 0.2}s`; // Delay between each word
  paragraph.appendChild(span);
});

const slider = document.querySelector(".projects-slider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

// Touch support for mobile
let touchStartX = 0;
let touchScrollLeft = 0;

slider.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].pageX - slider.offsetLeft;
  touchScrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchmove", (e) => {
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - touchStartX) * 2;
  slider.scrollLeft = touchScrollLeft - walk;
});

const topBtn = document.getElementById("deadpoolTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
