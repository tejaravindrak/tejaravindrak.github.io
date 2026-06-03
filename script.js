const text = "booting enterprise_ai_platforms.sh";

const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {

  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 45);
  }
}

typeEffect();