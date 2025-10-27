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





