// ==========================
// Elements
// ==========================

const gift = document.getElementById("gift");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const message = document.getElementById("message");

const letterBtn = document.getElementById("letterBtn");

const letterPopup = document.getElementById("letterPopup");

const closeLetter = document.getElementById("closeLetter");

// ==========================
// Birthday Message
// ==========================

const text =
"Today is your special day! 🎂 I hope your life is filled with happiness, success, love and lots of beautiful memories. May every dream you have come true. Enjoy every moment and keep smiling forever! ❤️";

let i = 0;

// ==========================
// Gift Click
// ==========================

gift.onclick = function () {

    page1.classList.remove("active");

    page2.classList.add("active");

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    typeMessage();

};

// ==========================
// Typing Animation
// ==========================

function typeMessage() {

    if (i < text.length) {

        message.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeMessage, 35);

    }

}

// ==========================
// Open Letter
// ==========================

letterBtn.onclick = function () {

    letterPopup.style.display = "flex";
letterPopup.style.justifyContent = "center";
letterPopup.style.alignItems = "center";

};

// ==========================
// Close Letter
// ==========================

closeLetter.onclick = function () {

    letterPopup.style.display = "none";

    page2.classList.remove("active");

    page3.classList.add("active");

    confetti({
        particleCount: 300,
        spread: 200,
        origin: { y: 0.6 }
    });

};

// ==========================
// Floating Hearts
// ==========================

setInterval(() => {

    if (!page3.classList.contains("active")) return;

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = "30px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    heart.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 1
            },
            {
                transform: "translateY(-120vh)",
                opacity: 0
            }
        ],
        {
            duration: 6000,
            easing: "linear"
        }
    );

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}, 600);