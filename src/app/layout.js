import { Roboto } from 'next/font/google'
import '../styles/global.css'

const roboto = Roboto({
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-roboto',
	subsets: ['latin'],
})

export const metadata = {
	title: 'AutoMarket',
	description: 'The best car marketplace in the Europe',
	icons: '/favicon.svg',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${roboto.variable} antialiased`}>
				<main>{children}</main>
			</body>
		</html>
	)
}
