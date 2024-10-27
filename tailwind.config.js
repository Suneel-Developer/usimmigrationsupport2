/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xxlg": "1420px",
        "xlg": "1220px",
        "lgx": "1120px",
        "xxs": "370px"
      }
    },
  },
  plugins: [],
};
