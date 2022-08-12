/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
    fontSize: {
      nav: "16px",
      title: "64px",
    },
    extend: {
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
      },
    },
  },
  plugins: [],
};
