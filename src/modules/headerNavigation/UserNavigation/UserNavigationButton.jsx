'use client'

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
		<IconButton
			className='flex items-center justify-center gap-sm px-md py-md'
			iconClassName='group-hover:fill-white'
			onClick={() => setOpenIndex(prev => (prev === index ? null : index))}
			icon={item?.icon}
			ariaLabel={item?.ariaLabel}
		>
			{windowWidth > 755 && windowWidth < 1014 && index === 1 && (
				<IoIosArrowDown
					className={clsx(
						'fill-light-grey transition linear duration-300 group-hover:fill-light-white',
						openIndex === index && 'rotate-180'
					)}
					size={16}
				/>
			)}
		</IconButton>
	)
}

export default UserNavigationButton
