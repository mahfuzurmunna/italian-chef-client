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
        "bg-hero": "url('/src/assets/hero-img.png')",
      },
    },
  },
  plugins: [],
};
