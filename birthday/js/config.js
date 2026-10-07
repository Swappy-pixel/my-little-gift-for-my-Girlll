/* =====================================================================
   ✏️  EDIT ONLY THIS FILE — everything personal lives here.
   - Use {name} and {sender} anywhere in text; they auto-fill.
   - Use \n for a new line.
   - Put photos in assets/images, videos in assets/videos, music in assets/music.
   ===================================================================== */
const birthdayConfig = {
  name: "Sweetie",              // 🎂 birthday person
  sender: "Your Name",          // 💌 you
  music: "",                    // e.g. "assets/music/song.mp3"  ("" = no music, button hidden)
  couple: true,                 // 🧸💕 couple teddies (hug & kiss) on the birthday-wish steps
  coupleImage: "",              // optional: your own couple picture/GIF, e.g. "assets/images/couple.png"
  teddyImage: "",               // e.g. "assets/images/teddy.png" (replaces the drawn teddy)
  sections: { cake: true, memories: true },   // set false to skip a section

  texts: {                      // all on-screen wording
    hello: "Hey You Chikuu...❤️",
    hint: "Your boy has planned a little surprise for you...",
    ready: "Are you ready?",
    day1: "Today is not just another day... ✨",
    day2: "Because it's YOUR special day! 🎂❤️",
    cake: "Okay... let's make this official! 🎂",
    hb: "Happiest Birthday Babe's! 🎉❤️",
    wait: "But wait... I have something special for you.",
    envelope: "I wrote something special for you... 💌",
    to: "For {My Girrlll..}  💌",
    readQ: "Did you read everything? 👀❤️",
    memTitle: "Some Beautiful Memories... 📸❤️",
    memEnd: "Every moment becomes a little more special because of you. ❤️",
    memEnd2: "But this isn't the end yet... 🧸",
    again: "Once Again...",
    hbFinal: "Wish you Happiest Birthday My Chicks my Hotiee my Sexxa.! 🎂🎉❤️",
    madeWith: "I Hate❤️you Babe's.",
    bye: "Until the next surprise... 🧸✨"
  },

  letter: {                     // 💌 the letter inside the envelope
    title: "Happy Birthday Piyuu 🧸❤️",
    greeting: "Dear {Naina},",
    paragraphs: [                // add or remove paragraphs freely
      "You are one of the most special people in my life, and today I just want you to feel how loved you are.",
      "Thank you for every laugh, every hug and every little moment that made my days brighter.",
      "Write your own heartfelt message here. Make it as long as you like — the letter scrolls."
    ],
    quote: "“The best things in life are the people we love.”",   // "" to hide
    signature: "With lots of love,\nYour Bunnny 🧸❤️"
  },

  memories: [                   // 📸 add/remove any number of items (type: "image" | "video")
    { type: "image", src: "assets/images/photo1.jpg", caption: "Beautiful memory ❤️" },
    { type: "image", src: "assets/images/photo2.jpg", caption: "One of my favorite moments 🧸" },
    { type: "video", src: "assets/videos/video1.mp4", caption: "A special moment 🎥❤️" }
  ],

  finalMessage: "May your smile always stay this beautiful,\nmay you always be surrounded by happiness that is Me😎\nand may this year bring you everything you deserve that is also only Me...😎❤️"
};
