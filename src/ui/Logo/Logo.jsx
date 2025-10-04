import Link from 'next/link'

const Logo = () => {
	return (
		<Link className='font-black tracking-md text-lg' href='/'>
			<span>Auto</span>
			<span className='text-orange'>Market</span>
		</Link>
	)
}

export default Logo
