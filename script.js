// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Happy Valentines Day :3";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});


  const heartBtn = document.getElementById("heartBtn");
  const popup = document.getElementById("photoPopup");
  const closePopup = document.getElementById("closePopup");

  heartBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close when clicking outside image
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

nextBtn.addEventListener("click", () => {
  page1.classList.remove("active");
  page2.classList.add("active");
});

backBtn.addEventListener("click", () => {
  page2.classList.remove("active");
  page1.classList.add("active");
});
function createHeart(container) {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");

  // Random horizontal position
  heart.style.left = Math.random() * 70 + "px";

  // Random animation duration
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  // 🔥 Random size
  const size = 20 + Math.random() * 20;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

const leftContainer = document.querySelector(".left-hearts");
const rightContainer = document.querySelector(".right-hearts");

setInterval(() => {
  createHeart(leftContainer);
  createHeart(rightContainer);
}, 800);
