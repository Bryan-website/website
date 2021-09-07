module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gum_pink: "#FF808F",
        light_pink: "#FFCCD2",
        dark_pink: "#D3174A",
        swamp_green: "#96A27B",
      },
      backgroundImage: (theme) => ({
        "home-image-mobile": "url('images/home_bg_mb.jpeg')",
        "home-image-web": "url('images/home_bg_wb.jpeg')",
        "about-image-mobile": "url('images/about_bg_mb.png')",
        "about-image-tablet": "url('images/about_bg_tb.png')",
        "about-image-web": "url('images/about_bg_wb.png')",
      }),
      transitionProperty: {
        height: "max-height",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
