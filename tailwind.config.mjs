/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        50: "#f2f9f0",
        100: "#e1f1da",
        200: "#c1e2b8",
        300: "#94cc89",
        400: "#63af58",
        500: "#3f9336",
        600: "#2b7526",
        700: "#215e1e",
        800: "#1c4b1a",
        900: "#173e16",
        950: "#050f05",
      },
    },
  },
  plugins: [],
};
