// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
        epilogue: ['Epilogue', 'serif'],
        // Add your custom font families here
      },
      fontWeight: {
        'extra-bold': "1000"
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-text-color": "#123456",
        "custom-yellow": "#FFD700",
        "custom-blue": "#0000FF",
        "customBlue": '#4640DE',
      },
      borderColor: {
        "custom-bg-color": "#ABCDEF",
        "custom-yellow": "#FFD700",
        "custom-blue": "#0000FF",
      },
      height:{
        "custom-height":"150vh"
      }
    },
  },
  variants: {},
  plugins: [],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
