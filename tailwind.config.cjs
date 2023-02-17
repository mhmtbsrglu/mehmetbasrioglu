/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "sidebar":"#162034",
        "middlebar":"#fcfcfc",
        "softbg":"#edf1f3",
        "primary":"#dcfb6e",
        "primarybg":"#242431",
        "icon":"#9999a0",
        "text":"#000",
        "activetext":"#9499ff",
        "primarysub":"#202b43",
        "secondary":"#3134fb",
        "border":"#2a3755",
        "verified":"#E64E69"
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1200px",
          xl: "1200px",
          "2xl": "1200px",
        },
      },
    },
  },
  plugins: [],
}