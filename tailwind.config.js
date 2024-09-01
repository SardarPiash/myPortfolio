/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      notoSans:["Noto Sans"," sans-serif"]
    },
    textColor: {
      softBlack: "#D3D3D3",
      softBlue: "#4A90E2",
      richGold:"#B87333",
      red:"red"
    },
    backgroundColor:{
      softBlue: "#4A90E2",
      red:"black",
      body:"#1A1A1A",
      blue:"rgb(59 130 246)"
    },
    borderColor:{
      softBlue: "#4A90E2",
      transparent:"transparent"
    },
    placeholderColor:{
      softBlack: "#D3D3D3",
    }
  },
  plugins: [],
}