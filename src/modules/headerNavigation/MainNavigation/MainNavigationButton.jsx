'use client'

import clsx from 'clsx'
import { IoIosArrowDown } from 'react-icons/io'

const MainNavigationButton = ({ label, openIndex, setOpenIndex, index }) => {
	return (
		<button
			className='group flex gap-sm items-center h-[36px] font-bold px-sm-plus py-sm-plus transition-colors linear duration-300 hover:text-white'
			type='button'
			onClick={() => setOpenIndex(prev => (prev === index ? null : index))}
		>
			<span>{label}</span>
			<IoIosArrowDown
				className={clsx(
					'fill-grey-light transition linear duration-300 group-hover:fill-white',
					openIndex === index && 'rotate-180'
				)}
				size={16}
			/>
		</button>
	)
}

export default MainNavigationButton
