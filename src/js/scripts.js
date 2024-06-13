// this is the animation scripts

document.addEventListener("DOMContentLoaded", function () {
  const words = ["developers 🥲", "graphic-designers 🍿", "coders 🧑‍💻", "Vampires 🧛"];
  let index = 0;
  const animatedText = document.getElementById("animated-text");

  function changeWord() {
    animatedText.classList.add('hidden');
    setTimeout(() => {
      index = (index + 1) % words.length;
      animatedText.textContent = words[index];
      animatedText.classList.remove('hidden');
    }, 1000); // Time it takes for the fade out transition
  }
  setInterval(changeWord, 2000); // Change every 3 seconds
  changeWord(); // Initial call
});
