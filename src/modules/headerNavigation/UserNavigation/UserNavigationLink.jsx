import NotificationBadge from '@/ui/Badges/NotificationBadge'
import Link from 'next/link'

const UserNavigationLink = ({ item }) => {
	return (
		<Link
			className='relative group block px-md py-md'
			href={item?.src}
			aria-label={item?.ariaLabel}
		>
			<span>{item?.icon}</span>
			<NotificationBadge />
		</Link>
	)
}

export default UserNavigationLink
