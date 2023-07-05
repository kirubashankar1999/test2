/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#fff",
        royalblue: "#4a5fd7",
        black: "#000",
        mistyrose: {
          100: "#ffe5e9",
          200: "#fbe8e1",
        },
        gainsboro: "#d9d9d9",
        lightcyan: "#d1f8fa",
        lemonchiffon: "#fff6cc",
        lavender: "#dbd9f5",
        mediumslateblue: "#405bff",
        navajowhite: "#ffdfb0",
        gray: "#fafafa",
        "primary-50": "#DBDFF7",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        nunito: ["var(--font-nunito)"],
      },
      fontSize: {
        lg: "18px",
        "21xl": "40px",
        sm: "14px",
        xl: "20px",
      },
    },
  },
  plugins: [],
};
