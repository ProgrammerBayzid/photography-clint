/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#289313",

          "secondary": "#af89d3",

          "accent": "#baf4ff",

          "neutral": "#18192A",

          "base-100": "#F2F5F8",

          "info": "#95B0F4",

          "success": "#51E6CD",

          "warning": "#EFBA34",

          "error": "#E5527E",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
