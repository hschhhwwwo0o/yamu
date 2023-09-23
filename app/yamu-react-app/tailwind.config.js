/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#007AFF",
        "dark-default-border": "#1F1F1F",
        "light-default-border": "#F3F3F3",
      },
      spacing: {
        "mobile-padding": "16px",
        "laptop-padding": "86px",
        "top-navbar-height": "57px",
        "min-top-navbar-height": "56px",
        "screen-without-top-navbar-height": "calc(100vh - 57px)",
        "min-screen-without-top-navbar-height": "calc(100vh - 56px)",
      },
    },
  },
  plugins: [],
};
