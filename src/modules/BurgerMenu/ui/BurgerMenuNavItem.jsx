'use client'

import clsx from 'clsx'
import { IoIosArrowDown } from 'react-icons/io'

const BurgerMenuNavItem = ({ item, index, openIndex, setOpenIndex }) => {
	return (
		<li
			className={clsx(
				'flex flex-col justify-center border-b border-grey last:border-0',
				openIndex === index && 'shadow-card'
			)}
		>
			<button
				className='flex items-center justify-between h-[60px] px-lg-strong w-full'
				type='button'
				onClick={() => setOpenIndex(prev => (prev === index ? null : index))}
			>
				<span className='font-bold'>{item?.title}</span>
				<IoIosArrowDown
					className={clsx(
						'fill-grey-light transition linear duration-300',
						openIndex === index && 'rotate-180'
					)}
					size={16}
				/>
			</button>
		</li>
	)
}

export default BurgerMenuNavItem
