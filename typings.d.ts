declare module '*.astro' {
	import { DetailedHTMLProps, HTMLAttributes } from 'react'

	interface AstroHTMLAttributes<T> extends HTMLAttributes<T> {
		class?: string
	}

	interface AstroHTMLProps<T> extends DetailedHTMLProps<AstroHTMLAttributes<T>, T> {}

	const astroProps: AstroHTMLProps<any>
	export default astroProps
}
