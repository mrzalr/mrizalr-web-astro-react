/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:'#035AA6',
				secondary: '#FCBF1E',
				defaultWhite: '#F5F5F5',
				defaultFont: '#120136'
			}
		},
	},
	plugins: [],
}
