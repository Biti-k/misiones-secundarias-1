/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textShadow: {
				'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
				'md': '3px 3px 6px rgba(0, 0, 0, 0.5)',
				'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
			  }
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.text-shadow-default': {
				textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
				},
				'.text-shadow-md': {
				textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
				},
				'.text-shadow-lg': {
				textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
				},
			})
		},
		require('tailwind-scrollbar'),
	],
}
