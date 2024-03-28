import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-text-color": "#123456",
        "custom-yellow": "#FFD700",
        "custom-blue": "#0000FF",
      },
      borderColor: {
        "custom-bg-color": "#ABCDEF",
        "custom-yellow": "#FFD700",
        "custom-blue": "#0000FF",
      },
    },
  },
  plugins: [],
};

export default config;