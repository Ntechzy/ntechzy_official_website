import { mix } from 'framer-motion';

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
        secondary: "#0C5AF5",
        mixed:"#7e8695"
      },
      keyframes: {
        scaleDown: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        scale: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        showUp: {
          '0%': { height: '0', opacity: "0" },
          '50%': { height: '50%', opacity: "0.5" },
          '100%': { height: '100%', opacity: "1" },
        },
        
      },
      animation: {
        scaleBack: 'scaleDown 0.3s ease',
        scale: 'scale 0.5s linear', 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(250deg, #75757566 0%, #ffffff00 70%)',
        'custom-gradient2': 'linear-gradient(93deg, rgb(255 255 255 / 5%) -6.85%, var(--background-color-1, rgba(255, 255, 255, 0)) 85.57%)'
        // 'custom-gradient2': 'linear-gradient(93deg, #7e8695 -6.85%, #9e9e9e 85.57%)',


      },
    },
  },
  plugins: [],
};
