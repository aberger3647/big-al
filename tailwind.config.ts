import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Anton', 'Impact', 'Oswald', 'Arial Narrow', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: '#000',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
