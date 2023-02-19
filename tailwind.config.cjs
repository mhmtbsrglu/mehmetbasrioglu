/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
     },
    extend: {
      colors:{
        "sidebar":"#162034",
        "middlebar":"#fcfcfc",
        "softbg":"#1e1e27",
        "primary":"#3fecd7",
        "primarybg":"#76bcb5",
        "icon":"#9999a0",
        "text":"#000",
        "activetext":"#9499ff",
        "primarysub":"#202b43",
        "secondary":"#b97bed",
        "border":"#2a3755",
        "verified":"#E64E69"
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1000px",
          xl: "1000px",
          "2xl": "1000px",
        },
      },
    },
  },
  plugins: [],
}