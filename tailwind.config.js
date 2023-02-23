/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sourcesanspro)"],
      serif: ["var(--font-lora)"],
      mono: ["var(--font-firacode)"],
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },

  corePlugins: {
    aspectRatio: false,
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],

  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          primary: "#31c4b5",
          secondary: "#06b6d4",
          accent: "#ff7099",
          neutral: "#222222",
          "base-100": "#f7f7f7",
          info: "#38bdf8",
          success: "#4ade80",
          warning: "#FBD428",
          error: "#fb7185",
        },
        dark: {
          primary: "#31c4b5",
          secondary: "#06b6d4",
          accent: "#ff7099",
          neutral: "#f7f7f7",
          "base-100": "#222222",
          info: "#38bdf8",
          success: "#4ade80",
          warning: "#FBD428",
          error: "#fb7185",
        },
      },
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
