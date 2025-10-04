'use client'

import { IoMdClose } from 'react-icons/io'

const BurgerMenuCloseButton = ({ setIsBurgerMenuOpen }) => {
	return (
		<button
			className='group flex items-center justify-between px-lg-strong py-xl'
			type='button'
			onClick={() => setIsBurgerMenuOpen(false)}
		>
			<span className='font-bold'>Menü schließen</span>
			<IoMdClose
				className='fill-grey-light transition-colors duration-300 group-hover:fill-white'
				size={20}
			/>
		</button>
	)
}

export default BurgerMenuCloseButton
