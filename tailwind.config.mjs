/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16171b",
        secondary: "#0C5AF5"
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(250deg, #75757566 0%, #ffffff00 70%)',
      },
    },
  },
  plugins: [],
};
