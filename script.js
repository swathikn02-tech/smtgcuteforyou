const slides = [
  {
    eyebrow: "A little website, from my heart ❤️",
    title: "Hey Bhu Bhu… 🥺",
    text: "I made this little corner of the internet just for you. There’s something I really want to say, and I hope you read it with the same love with which I made it.",
    button: "Open this ❤️"
  },
  {
    eyebrow: "First things first",
    title: "I’m really sorry.",
    text: "I know I’ve hurt you, sometimes more than I realized. I know there were moments when my words, my actions, or even my overthinking made things harder for you.",
    button: "I want to tell you more…"
  },
  {
    title: "We’ve had our fights…",
    text: "We’ve misunderstood each other. We fought each other A LOT. 😭 But underneath all of that, there’s still so much love between us. And I never want the bad moments to make you forget the good ones.",
    button: "There’s more…"
  },
  {
    title: "You are my safe place. 🫂",
    text: "You’re someone I can be my most stupid, silly, emotional self with. I feel safe when I’m near you. And sometimes, with you, I feel like the little girl who just wants to be loved and protected.",
    button: "One more thing…"
  },
  {
    eyebrow: "Our little things",
    title: "I still want more memories with you. 🥹",
    text: "More random conversations. More silly pictures. More hugs. More dates. More laughing until our stomachs hurt. And yes… more lotssss of kisses with you. 💋💋♾️",
    button: "The last one…"
  },
  {
    eyebrow: "Bhu Bhu, please remember this",
    title: "I’m sorry. I love you. ❤️",
    text: "I can’t undo the moments where I hurt you. But I can learn from them and make better moments with you. Thank you for loving me, being patient with me, and being you.",
    button: "One last thing 💌",
    photo: true
  }
];

let current = 0;
const app = document.getElementById("app");

function render() {
  const slide = slides[current];

  app.innerHTML = `
    <div class="text-center fade">

      ${slide.eyebrow ? `
        <p class="text-sm text-rose-400 mb-4">
          ${slide.eyebrow}
        </p>
      ` : ""}

      <h1 class="font-display text-4xl md:text-6xl text-[#4b2931] mb-6">
        ${slide.title}
      </h1>

      <p class="max-w-xl mx-auto text-lg leading-8 text-[#6b4b52]">
        ${slide.text}
      </p>

      <button
        id="nextBtn"
        class="mt-8 px-6 py-3 rounded-full
        bg-[#4b2931] text-white
        hover:bg-[#63343f]
        transition">
        ${slide.button}
      </button>

    </div>
  `;

  document.getElementById("nextBtn").addEventListener("click", next);
}

function next() {
  if (current < slides.length - 1) {
    current++;
    render();
  } else {
    showFinal();
  }
}

function showFinal() {
  app.innerHTML = `
    <div class="text-center fade">

      <div class="text-5xl mb-6">🫂</div>

      <h1 class="font-display text-4xl md:text-6xl text-[#4b2931] mb-6">
        Can I have a hug?
      </h1>

      <p class="max-w-xl mx-auto text-lg leading-8 text-[#6b4b52]">
        I know saying sorry doesn’t magically fix everything.
        I just want you to know that I mean it, Bhu Bhu.
        I love you, and I want to keep learning how to love you better. ❤️
      </p>

      <p class="mt-7 font-display text-2xl text-[#4b2931]">
        — Your Swathi 💗
      </p>

      <div class="mt-8 flex justify-center">
        <div class="bg-white p-3 pb-8 shadow-lg rotate-[-2deg] w-64">
          <img
            src="./photo.jpg"
            alt="Our memory ❤️"
            class="w-full h-72 object-cover bg-rose-50"
            onerror="this.style.display='none'; document.getElementById('finalPhotoPlaceholder').style.display='flex';"
          />

          <div
            id="finalPhotoPlaceholder"
            class="hidden w-full h-72 bg-rose-50 items-center justify-center text-center text-rose-300 px-4">
            <div>
              <div class="text-4xl mb-2">📸</div>
              <p class="text-sm">Put your photo here</p>
              <p class="text-xs mt-1">Rename it to photo.jpg</p>
            </div>
          </div>

          <p class="text-center mt-3 font-display text-lg text-[#6b4b52]">
            Us ❤️
          </p>
        </div>
      </div>

      <p class="mt-5 text-sm text-rose-400">
        P.S. More kissie kissie for you 💋💋
      </p>

      <div class="mt-10 inline-block px-5 py-3 rounded-full bg-rose-50 border border-rose-100">
        <p class="text-sm text-rose-500 font-medium">
          💌 Made with a little help from ChatGPT 🤭❤️
        </p>
      </div>

      <div>
        <button
          id="restart"
          class="mt-6 text-sm text-rose-400 underline underline-offset-4">
          Read it again
        </button>
      </div>

    </div>
  `;

  document.getElementById("restart").addEventListener("click", () => {
    current = 0;
    render();
  });
}

render();
