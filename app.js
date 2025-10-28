

const paragraph = document.querySelector(".animated-text");
const words = paragraph.textContent.trim().split(/\s+/);
paragraph.textContent = "";

words.forEach((word, i) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.animationDelay = `${i * 0.2}s`; // Delay between each word
  paragraph.appendChild(span);
});





