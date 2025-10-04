import Link from 'next/link'

const UserNavigationLink = ({ item }) => {
	return (
		<Link
			className='group block px-md py-md'
			href={item?.src}
			aria-label={item?.ariaLabel}
		>
			{item?.icon}
		</Link>
	)
}

export default UserNavigationLink
