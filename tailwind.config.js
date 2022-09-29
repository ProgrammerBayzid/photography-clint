/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#9202cc",
        
"secondary": "#2e22b5",
        
"accent": "#4852ba",
        
"neutral": "#302442",
        
"base-100": "#ECEAF5",
        
"info": "#3DACC2",
        
"success": "#1D9A5A",
        
"warning": "#FAC16B",
        
"error": "#E42535",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
