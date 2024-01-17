/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bg: "#15161a",
        active: "#60c9fb",
        section: "#272a31",
        text: "#fafcfe",
      },
      fontSize:{
        ExtraBold:["32px",{fontWeight:'800',lineHeight:"45px"}],
        ExtraBoldMd:["26px",{fontWeight:'700',lineHeight:"38px"}],
        SemiBold:["16px",{fontWeight:'600',lineHeight:"30px"}],
        Regular:"14px",
      }
    },
  },
  plugins: [],
}

