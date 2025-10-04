'use client'

import { selectListByWindowWidth } from '../utils/selectListByWindowWidth'
import {
	userDesktopNavigation,
	userTabletNavigation,
} from '../data/userNavigation'
import UserNavigationButton from './UserNavigationButton'
import { useState } from 'react'
import UserNavigationLink from './UserNavigationLink'

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
				</li>
			))}
		</ul>
	)
}

export default UserNavigation
