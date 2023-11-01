/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{jsx,js,html}"],
  theme: {
    extend: {
      colors: {
        "blue": "#458FF6",
        "footer_gradient": "linear-gradient(183deg, #67C3F3 -8.57%, #5A98F2 82.96%);",
        "grey": "#7D7987",
        "customer_gradient": "linear-gradient(208deg, #67C3F3 9.05%, #5A98F2 76.74%)",
        "white": "#FFF8F5",
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
