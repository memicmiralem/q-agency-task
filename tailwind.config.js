/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f6f8fa",
        "background-dark": "#020408",
        header: "#24292f",
        "header-dark": "#161b22",
        "font-primary": "#24292f",
        "font-primary-dark": "#f0f6fb",
        "font-secondary": "#6e7781",
        "font-secondary-dark": "#b1bac4",
        card: "#ffffff",
        "card-dark": "#0e1117",
        "border-light": "#d0d7de",
        "border-dark": "#30363d",
      },
    },
  },
  plugins: [],
};
