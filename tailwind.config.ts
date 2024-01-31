import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
    },
  },
  daisyui: {
    themes: [
      {
        alsafi: {
          primary: "#4366c9",
          secondary: "#0a1e49",
          accent: "#ffb178",
          neutral: "#0a1e49",
          "base-100": "#ffffff",

          "--rounded-box": "0rem",
          "--rounded-btn": "0rem",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
