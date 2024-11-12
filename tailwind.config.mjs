/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
            beige: '#FFFDF9', 
          },
          fontFamily: {
            quicksand: ['"Quicksand"', 'sans-serif'],
          },
          fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
          },
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
