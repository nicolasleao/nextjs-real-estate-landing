import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    backgroundImage: {
      img_bg_hero: 'url("../assets/mulher-em-casa-no-celular-2-min.jpg")',
    },
    extend: {
      colors: {
        "primary-blue": "#106EB0",
        "primary-orange": "#ff9747",
        "primary-green": "#326629",
        "primary-gray": "#33303E",
        "primary-red": "#d64753",
        "primary-yellow": "#ffcb47",
        "second-gray": "#4E4B59",
        "light-gray": "#949494",
        "gray-phone": "#F4F4F4",
        "txt-gray": "#7A77u6",
        "opacity-gray": "rgba(100, 80, 57, 0.1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
