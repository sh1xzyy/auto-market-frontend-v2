'use client'

import clsx from 'clsx'
import { IoIosArrowDown } from 'react-icons/io'
import BurgerDropDownMenuList from './BurgerDropDownMenuList'

const BurgerMenuNavItem = ({ item, index, openIndex, setOpenIndex }) => {
	return (
		<li
			className={clsx(
				'flex flex-col justify-center border-b border-grey-deep last:border-0',
				openIndex === index && 'shadow-card'
			)}
		>
			<button
				className='flex items-center justify-between h-[60px] w-full'
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

			{openIndex === index && <BurgerDropDownMenuList list={item.list} />}
		</li>
	)
}

export default BurgerMenuNavItem
