/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '200px',
			sm: '320px',
			// => @media (min-width: 640px) { ... }

			md: '481px',
			// => @media (min-width: 768px) { ... }

			lg: '768px',
			// => @media (min-width: 1024px) { ... }

			xl: '961px',
			// => @media (min-width: 1280px) { ... }

			'1xl': '1025px',
			'2xl': '1281px'
			// => @media (min-width: 1536px) { ... }
		},
		extend: {},
		colors: {
			primary: {
				50: '#FCFDFB',
				80: '#F8FAF9',
				100: '#F9FCF8',
				200: '#F1F7EC',
				300: '#E8F3E1',
				350: '#F9F4DA',
				400: '#BFE6AD',
				500: '#C5E0B4',
				25: '##19ce38',
				600: '#B1CAA2',
				650: '#2D7428',
				700: '#76866C',
				800: '#596551',
				900: '#3B4336',
				950: '#141a12',
				980: '#262626'
			},
			red: {
				50: '#fff1f1',
				100: '#ffdfdf',
				200: '#ffc5c5',
				300: '#ff9d9d',
				400: '#ff6464',
				500: '#ff2929',
				600: '#ed1515',
				700: '#c80d0d',
				800: '#a50f0f',
				900: '#881414',
				950: '#4b0404'
			},
			yellow: {
				50: '#fcfee8',
				100: '#f8ffc2',
				200: '#f4ff87',
				300: '#f5ff43',
				400: '#ffff1a',
				500: '#efe503',
				600: '#ceb500',
				700: '#a48304',
				800: '#88660b',
				900: '#735310',
				950: '#432c05'
			},
			purple: {
				50: '#fff3ff',
				100: '#fde6ff',
				200: '#fcccff',
				300: '#fda3ff',
				400: '#fd6dff',
				500: '#f41aff',
				600: '#de16e3',
				700: '#bb0ebd',
				800: '#9a0e9a',
				900: '#7e117b',
				950: '#550053'
			},
			blue: {
				50: '#ebf1ff',
				100: '#dbe4ff',
				200: '#beccff',
				300: '#97aaff',
				400: '#6e7bff',
				500: '#4c4eff',
				600: '#291aff',
				700: '#3120e2',
				800: '#271db6',
				900: '#25208f',
				950: '#181353'
			}
		}
	},

	plugins: []
}
