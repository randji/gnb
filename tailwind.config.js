/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#114744",
        "accent-yellow": "#FFD700",
      },
      fontFamily: {
        typekit: ["basic-sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
