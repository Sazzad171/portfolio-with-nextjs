import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   sm: '500px'
    // },
    // colors: {
      
    // },
    extend: {
      colors: {
        theme: {
          orange: "#f75023",
          dark: "#2b2d33"
        }
      },
    },
  },
  plugins: [],
};
export default config;
