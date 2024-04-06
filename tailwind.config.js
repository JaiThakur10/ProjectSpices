module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: { 900: "#000201", "900_3f": "#0000003f" },
        gray: { 50: "#fef9f4", 100: "#f6f6f6", 500: "#8f8f8f", "50_01": "#f8f8f8", "50_a3": "#f8f8f8a3" },
        blue_gray: { 100: "#d9d9d9", "900_01": "#23292e" },
        white: { A700: "#ffffff" },
        red: { A200: "#ff4f4f" },
        yellow: { 100: "#fee3ca" },
        orange: { 50: "#feefe0" },
        gray_200: "#ededed",
      },
      boxShadow: { xs: "10px 20px  60px 0px #0000003f" },
      fontFamily: { raleway: "Raleway", rubik: "Rubik", pollerone: "Poller One" },
      backgroundImage: { gradient: "linear-gradient(135deg, #273032,#274b53)" },
      opacity: { 0.81: 0.81 },
      
    },
  },
  plugins: [require("@tailwindcss/forms"),require("daisyui")],
 
  
};

