module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      },

      fontFamily: { raleway: "Raleway", rubik: "Rubik", pollerone: "Poller One" },
      backgroundImage: { gradient: "linear-gradient(135deg, #273032,#274b53)" },
      opacity: { 0.81: 0.81 },
      
    },
  },
  plugins: [require("@tailwindcss/forms"),require("daisyui")],
 
  
};

