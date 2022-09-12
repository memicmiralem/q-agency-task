/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f6f8fa",
        header: "#24292f",
        "font-primary": "#24292f",
        "font-secondary": "#6e7781",
      },
    },
  },
  plugins: [],
};
