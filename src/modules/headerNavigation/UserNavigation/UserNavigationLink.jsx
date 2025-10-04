import Link from 'next/link'

const UserNavigationLink = ({ item }) => {
	return (
		<Link
			className='relative group block p-md'
			href={item?.src}
			aria-label={item?.ariaLabel}
		>
			<span>{item?.icon}</span>
		</Link>
	)
}

export default UserNavigationLink
