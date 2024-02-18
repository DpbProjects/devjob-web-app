/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
    },
    colors: {
      violet: "#5964E0",
      "light-violet": "#939BF4",
      "dark-blue": "#19202D",
      midnight: "#121721",
      "light-grey": "#979797",
      "off-white": "#F4F6F8",
      gray: "#9DAEC2",
      "dark-grey": "#6E8098",
    },
    fontSize: {
      body: ["16px", { lineHeight: "26px", letterSpacing: "0" }],
      h4: ["14px", { lineHeight: "18px", letterSpacing: "0" }],
      h3: ["20px", { lineHeight: "24px", letterSpacing: "-0.8px" }],
      h2: ["24px", { lineHeight: "29px", letterSpacing: "-0.63px" }],
      h1: ["28px", { lineHeight: "34px", letterSpacing: "-0.1px" }],
    },
  },
  plugins: [],
};
