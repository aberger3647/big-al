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
      colors: {
        brand: {
          yellow: 'var(--ba-yellow)',
          'yellow-hover': 'var(--ba-yellow-hover)',
          teal: 'var(--ba-teal)',
          'teal-200': 'var(--ba-teal-200)',
          'teal-700': 'var(--ba-teal-700)',
          blue: 'var(--ba-blue)',
          'blue-dark': 'var(--ba-blue-dark)',
          orange: 'var(--ba-orange)',
          'orange-dark': 'var(--ba-orange-dark)',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
