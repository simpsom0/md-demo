/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SFMono-Regular"],
      },
      // colors: {
      // 	primary:,
      // 	secondary:,
      // 	tertiary:,
      // 	accent:,
      // 	warning:,
      // 	notice:,
      // 	confirm:,
      // 	link:,
      // },
      // typography: (theme) => ({
      // 	DEFAULT: {
      //   	css: {
      //     	a: {
      //       	color: theme("colors.link"),
      //       },
      //   	},
      //  	},
      // }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
