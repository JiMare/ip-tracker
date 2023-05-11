/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "700px",
        lg: "1110px",
      },
      backgroundImage: {
        "hero-pattern": "url('images/pattern-bg.png')",
      },
      zIndex: {
        1000: "1000",
      },
    },
    fontSize: {
      lg: "26px",
      xl: "32px",
    },
  },
  plugins: [],
};
