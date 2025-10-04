'use client'

import { useState } from 'react'
import { mainNavigation } from '../data/mainNavigation'
import MainNavigationButton from './MainNavigationButton'

const MainNavigation = () => {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<ul className='flex gap-[10px]'>
			{mainNavigation.map((label, i) => {
				return (
					<li className='relative' key={i}>
						<MainNavigationButton
							label={label}
							openIndex={openIndex}
							setOpenIndex={setOpenIndex}
							index={i}
						/>
					</li>
				)
			})}
		</ul>
	)
}

export default MainNavigation
