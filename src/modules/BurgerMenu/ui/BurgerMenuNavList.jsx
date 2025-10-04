import { useState } from 'react'
import { burgerNavMenu } from '../data/burgerNavigationMenu'
import BurgerMenuNavItem from './BurgerMenuNavItem'

const BurgerMenuNavList = () => {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<nav>
			<ul className='flex flex-col'>
				{burgerNavMenu.map((item, i) => (
					<BurgerMenuNavItem
						key={i}
						item={item}
						index={i}
						openIndex={openIndex}
						setOpenIndex={setOpenIndex}
					/>
				))}
			</ul>
		</nav>
	)
}

export default BurgerMenuNavList
