/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: "#faf5ed",
        green: "#faf5ed",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        largest: "65pt",
        larget: "36pt",
        large: "24pt",
        standard: "18pt",
        small: "14pt",
        smaller: "10pt",
        tiny: "6pt",
      },
    },
  },
  plugins: [],
};
