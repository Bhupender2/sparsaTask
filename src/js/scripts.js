// this is the animation scripts

document.addEventListener("DOMContentLoaded", function () {
  const words = ["developers", "graphic-designers", "coders"];
  let index = 0;
  const animatedText = document.getElementById("animated-text");

  function changeWord() {
    animatedText.textContent = words[index];
    index = (index + 1) % words.length;
  }

  setInterval(changeWord, 3000); // Change every 3 seconds
  changeWord(); // Initial call
});
