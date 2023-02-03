/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#54C01E",
        creamy: "#FDF1B8",
      },
      backgroundImage: {
        homeBg: "url('src/assets/sunset-g2897d7f47_1920.jpg')",
        légume1: "url('src/assets/ail.png')",
        légume2: "url('src/assets/artichaut.png')",
        légume3: "url('src/assets/asperges.png')",
        légume4: "url('src/assets/aubergine.png')",
        légume5: "url('src/assets/avocat.png')",
        légume6: "url('src/assets/concombre.png')",
        légume7: "url('src/assets/oignon-jaune.png')",
        légume8: "url('src/assets/tomate-rouge.png')",
      },
    },
  },
  plugins: [],
};
