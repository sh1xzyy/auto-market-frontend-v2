'use client'

import { useState } from 'react'
import { mainNavigation } from '../data/mainNavigation'
import MainNavigationButton from './MainNavigationButton'
import { DropDownMenu } from '@/modules/DropDownMenu'
import DropDownMainList from '@/modules/DropDownMenu/ui/DropDownMainList'
import { selectDropDownMenuByIndex } from '../utils/selectDropDownMenuByIndex'

const MainNavigation = () => {
	const [openIndex, setOpenIndex] = useState(null)
	const dropDownMenu = selectDropDownMenuByIndex(openIndex)

	return (
		<>
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

							{openIndex === i && (
								<DropDownMenu
									className='w-[570px] p-lg-strong left-1/2 -translate-x-1/2'
									iconClassName='left-1/2 -translate-x-1/2'
								>
									<DropDownMainList list={dropDownMenu} />
								</DropDownMenu>
							)}
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default MainNavigation
