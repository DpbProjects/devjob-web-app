/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      backgroundImage: {
        "header-pattern-desktop": "url('/bg-pattern-header.svg')",
        "header-pattern-mobile": "url('/bg-pattern-header.svg')",
      },
    },
    colors: {
      // App colours
      violet: "#5964E0",
      midnight: "#121721",
      gray: "#9DAEC2",
      "light-violet": "#939BF4",
      "dark-blue": "#19202D",
      "light-grey": "#979797",
      "off-white": "#F4F6F8",
      "dark-grey": "#6E8098",
      white: "#FFFFFF",

      // logo background colours
      scoot: "hsl(var(--color-scoot))",
      blogr: "hsl(var(--color-blogr))",
      vector: "hsl(var(--color-vector))",
      office: "hsl(var(--color-office))",
      pod: "hsl(var(--color-pod))",
      creative: "hsl(var(--color-creative))",
      pomodoro: "hsl(var(--color-pomodoro))",
      maker: "hsl(var(--color-maker))",
      coffee: "hsl(var(--color-coffee))",
      mastercraft: "hsl(var(--color-mastercraft))",
      crowdfund: "hsl(var(--color-crowdfund))",
      typemaster: "hsl(var(--color-typemaster))",
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
