'use client'

import { selectListByWindowWidth } from '../utils/selectListByWindowWidth'
import {
	userDesktopNavigation,
	userTabletNavigation,
} from '../data/userNavigation'
import UserNavigationButton from './UserNavigationButton'
import { useState } from 'react'
import UserNavigationLink from './UserNavigationLink'
import { DropDownMenu } from '@/modules/DropDownMenu'
import DropDownNotification from '@/modules/DropDownMenu/ui/DropDownNotification'
import DropDownUserInfo from '@/modules/DropDownMenu/ui/DropDownUserInfo'

const UserNavigation = ({ windowWidth }) => {
	const [openIndex, setOpenIndex] = useState(null)

	const userNavigationList = selectListByWindowWidth(
		windowWidth,
		userDesktopNavigation,
		userTabletNavigation
	)

	return (
		<ul className='flex'>
			{userNavigationList?.map((item, i) => (
				<li className='relative' key={i}>
					{item?.type === 'link' ? (
						<UserNavigationLink item={item} />
					) : (
						<UserNavigationButton
							item={item}
							index={i}
							windowWidth={windowWidth}
							openIndex={openIndex}
							setOpenIndex={setOpenIndex}
						/>
					)}

					{openIndex === i && i === 0 && (
						<DropDownMenu
							className='w-[360px] py-lg -right-[60px] max-h-[450px] overflow-y-auto custom-scroll'
							iconClass='right-[18%]'
						>
							<DropDownNotification />
						</DropDownMenu>
					)}

					{openIndex === i && i === 1 && (
						<DropDownMenu
							className='w-[170px] py-md px-lg-strong right-0'
							iconClass='right-[10%]'
						>
							<DropDownUserInfo />
						</DropDownMenu>
					)}
				</li>
			))}
		</ul>
	)
}

export default UserNavigation
