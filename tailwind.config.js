/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding:'2rem'
    },
    screens: {
      xs:"321px",
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        vasek: {
          purple:{
            '100':"#A7A1FF",
            '200':"#9892FF",
            '300':"#8982FF",
            '400':"#7B73FF",
            '500':"#6C63FF",
            '600':"#6159E6",
            '700':"#564FCC",
            '800':"#4C45B3",
            '900':"#413B99"
          } ,
          white: "#F5F5FF",
          black: "#01000D",
        },
      },
      fontSize: {
        "vasek-extra": 142.66,
        "vasek-extra-sm":96,
        "vasek-h1": "57.53px",
        "vasek-h2": "47.78px",
        "vasek-h3": "39.81px",
        "vasek-h4": "33.18px",
        "vasek-h5": "27.85px",
        "vasek-h6": "23.04px",
        "vasek-large": "19.2px",
        "vasek-medium": "16px",
        "vasek-small": "13.33px",
      },
      fontFamily: {
        generalSans: ["GeneralSans"],
        satoshi: ["Satoshi"],
      },
      keyframes: {
        scrollText: {
          from: { transform: "translate(-50%, 0%)" },
          to: { transform: "translate(0%, 0%)" },
        },
      },
      animation: {
        scrollText: "scrollText 120s infinite linear",
      },
    },
  },
  plugins: [],
};
