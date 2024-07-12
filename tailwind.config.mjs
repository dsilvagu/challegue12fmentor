/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'barlow': ['"Barlow Semi Condensed"', 'sans-serif']
			}
		},
		colors: {
			'pmviolet': 'hsl(263, 55%, 52%)',
			'pvdgblue': 'hsl(217, 19%, 35%)',
			'pvdbblue': 'hsl(219, 29%, 14%)',
			'pwhite': 'hsl(0, 0%, 100%)',

			'plgray': 'hsl(0, 0%, 81%)',
			'plgblue': 'hsl(210, 46%, 95%)'
		}
	},
	plugins: [],
}
