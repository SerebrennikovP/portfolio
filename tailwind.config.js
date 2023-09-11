/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
      },
      screens: {
        xs: "500px",
        sm: "640px",
        md: "768px",
        semilg: "900px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1850px",
        xxxl:"2500px",
        wide:{ 'raw': '(min-aspect-ratio: 2.35)' },
        tall:{ 'raw': '(max-aspect-ratio: 0.75)' },
        square:{ 'raw': '(max-aspect-ratio: 1)' },
        projectpage:{ 'raw': '(max-aspect-ratio: 1.25)' },
      },
    },
  },
  plugins: [],
  important: true,
};
