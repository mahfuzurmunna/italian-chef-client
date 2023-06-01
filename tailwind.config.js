/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        cormorant: ["'Cormorant", "serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      colors: {
        primary: "#1A1C1B",
        accent: "#b7b095",
        bgColor: "#D9D9D9",
        paraColor: "#3E3D3A",
      },
      backgroundImage: {
        "bg-nav": "url('/src/assets/bg-nav.png')",
        "bg-navbar" : "url('/src/assets/bg-navbar.png')",
        "bg-hero": "url('/src/assets/hero-img.png')",
        "bg-hero2": "url('/src/assets/hero-img2.png')",
        "bg-food": "url('/src/assets/bg-food.png')"
      },
    },
  },
  plugins: [],
};
