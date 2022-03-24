module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"], // tailwind 적용할 경로 지정
  theme: {
    extend: {},
  },
  darkMode: "media", // 컴퓨터 환경설정
  // darkMode: "class", // toggle
  plugins: [require("@tailwindcss/forms")],
};
