// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",     
        secondary: "var(--secondary)",
        treteriary: "var(--treteriary)",
        quaternary: "var(--quaternary)",
      },
    },
  },
  plugins: [],
};
