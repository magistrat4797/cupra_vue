/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-grey": "#B4B4B3",
        "secondary-grey": "#D5D5D5",
        "tertiary-grey": "#242221",
        "light-grey": "#DBDBDB",
        "dark-grey": "#1B1B1B",
        "secondary-white": "#F5F5F5",
        "base-blue": "#007BFF",
        "dark-blue": "#0056B3",
        "base-red": "#FF0000",
        "btn-primary": "#190F14",
        "btn-primary-hover": "#494949",
        "btn-secondary": "#DBD3CB",
        "btn-secondary-hover": "#FFFFFF",
        "checkbox-selected": "#8C8B8B",
      },
      minWidth: {
        checkbox: "20px",
      },
      minHeight: {
        btn: "46px",
        header: "84px",
        section: `calc(100vh - 84px)`,
        checkbox: "20px",
      },
      width: {
        "carousel-nav": "40px",
        "carousel-nav-desktop": "50px"
      },
      height: {
        "select-option": "145px",
        "input-mobile": "40px",
        "input": "45px",
        "carousel-nav": "40px",
        "carousel-nav-desktop": "50px"
      },
      maxWidth: {
        form: "553px",
        container: "1404px",
        "container-sm": "702px",
        "1/3": "33.33334%",
        "carousel-slide-info": "590px",
      },
      padding: {
        header: "84px",
        section: "104px",
        29: "117px",
      },
      zIndex: {
        1: "1",
        "header": "100",
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
      "2xs": "13px",
      xs: "14px",
      sm: "15px",
      base: "16px",
      md: "18px",
      lg: "20px",
      xl: "30px",
      "2xl": "40px",
      "3xl": "60px",
      "sm-heading": "23px",
      "md-heading": "36px",
      "lg-heading": "48px",
      "carousel-nav": "23px",
      "carousel-nav-desktop": "25px",
    },
  },
}