'use client'

import NotificationBadge from '@/ui/Badges/NotificationBadge'
import IconButton from '@/ui/IconButton/IconButton'
import clsx from 'clsx'
import { IoIosArrowDown } from 'react-icons/io'

const UserNavigationButton = ({
	item,
	index,
	windowWidth,
	openIndex,
	setOpenIndex,
}) => {
	return (
		<div className='relative'>
			<IconButton
				className='flex items-center justify-center gap-sm p-md'
				iconClassName='group-hover:fill-white'
				onClick={() => setOpenIndex(prev => (prev === index ? null : index))}
				icon={item?.icon}
				ariaLabel={item?.ariaLabel}
			>
				{windowWidth > 755 && windowWidth < 1014 && index === 1 && (
					<IoIosArrowDown
						className={clsx(
							'fill-grey-light transition linear duration-300 group-hover:fill-white',
							openIndex === index && 'rotate-180'
						)}
						size={16}
					/>
				)}
			</IconButton>

			<NotificationBadge />
		</div>
	)
}

export default UserNavigationButton
