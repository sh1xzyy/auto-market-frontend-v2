import clsx from 'clsx'
import Link from 'next/link'

const RegisterLink = ({ className }) => {
	return (
		<Link
			href='/auth'
			className={clsx(
				'flex items-center justify-center h-[36px] w-full px-lg py-md font-bold rounded-md bg-violet transition linear duration-300 hover:bg-violet-deep',
				className
			)}
		>
			<span className='text-md'>Anmelden</span>
		</Link>
	)
}

export default RegisterLink
