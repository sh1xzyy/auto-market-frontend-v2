'use client'

import { useState } from 'react'
import AuthTabs from './ui/AuthTabs'

const AuthCard = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div>
			<div className='mb-xl-plus bg-black-soft-bg border border-grey-deep md:rounded-lg'>
				<AuthTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
			</div>
		</div>
	)
}

export default AuthCard
