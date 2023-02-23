/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#925E78",
      pastelPink: "#F0E5EA",
      pastelBlue: "#E4F6F7",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      title: "0.14em",
      widest: ".2em",
    },
    extend: {
      fontSize: {
        nav: "16px",
        title: "54px",
      },
      backgroundImage: {
        witw: "url('../public/images/WITW/Home.png')",
        myco: "url('../public/images/MyConnect/Home.png')",
        mycomob: "url('../public/images/MyConnectMobile/Home.png')",
        dwt: "url('../public/images/DisneyWaitTimes/Home.png')",
      },
      dropShadow: {
        pp: "34px 47px 0px rgba(187, 229, 237, 0.4)",
      },
      borderRadius: {
        pp: "181px",
        fancy: "30% 70% 70% 30% / 30% 30% 70% 70%",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        flip: {
          "0%": {
            transform: "perspective(400px) rotate3d(0, -1, 0, 90deg)",
            animationTimingFunction: "ease-in",
            opacity: 0,
          },
          "40%": {
            transform: "perspective(400px) rotate3d(0, -1, 0, -20deg)",
            animationTimingFunction: "ease-in",
          },
          "60%": {
            transform: "perspective(400px) rotate3d(0, -1, 0, 10deg)",
            opacity: 1,
          },
          "80%": {
            transform: "perspective(400px) rotate3d(0, -1, 0, -5deg)",
            opacity: 0,
          },
          "100%": {
            transform: "perspective(400px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
