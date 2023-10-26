/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-grey": "#75787B",
        "primary-grey": "#B4B4B3",
        "secondary-grey": "#D5D5D5",
        "tertiary-grey": "#242221",
        "light-grey": "#DBDBDB",
        "lightest-grey": "#F4F4F3",
        "dark-grey": "#1B1B1B",
        "primary-sand": "#DBD3CB",
        "secondary-sand": "#D9CDBD",
        "oxygen-white": "#F8F8F8",
        "cupra-petrol": "#093E52",
        "dark-peacock": "#006072",
        "btn-primary": "#190F14",
        "btn-primary-hover": "#494949",
        "btn-secondary": "#DBD3CB",
        "btn-secondary-hover": "#FFFFFF",
        "secondary-white": "#F5F5F5",
      },
      minHeight: {
        "btn": "46px",
        header: "84px",
        section: `calc(100vh - 84px)`,
      },
      minWidth: {
        "btn-sm": "90px",
        "btn-md": "150px",
        "btn-lg": "200px",
      },
      maxWidth: {
        container: "1404px",
        "container-sm": "672px",
        "1/3": "33.33334%",
      },
      padding: {
        full: "100%",
        header: "84px",
        section: "104px",
      },
      boxShadow: {
        header: "0 5px 15px rgba(0, 0, 0, 0.35)",
        button: "0 0 12px",
        base: "0 10px 20px rgba(0, 0, 0, 0.6)",
      },
      zIndex: {
        1: "1",
        100: "100",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    fontSize: {
      xs: "14px",
      sm: "15px",
      base: "16px",
      md: "18px",
      lg: "20px",
      xl: "30px",
      "2xl": "40px",
      "3xl": "60px",
      "sm-heading": "23px",
    },
  },
  plugins: [],
}