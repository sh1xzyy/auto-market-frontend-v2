'use client'

import { useState } from 'react'
import AuthTabs from './ui/AuthTabs'
import AuthTitle from './ui/AuthTitle'

const AuthCard = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div>
			<div className='mb-xl-plus bg-black-soft-bg border border-grey-deep md:rounded-lg'>
				<AuthTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
				<div className='px-lg-strong py-xl-plus md:p-3xl'>
					<AuthTitle
						title={
							activeIndex === 0
								? 'Hallo! Willkommen zurück!'
								: 'Erstelle Dein mobile.de Konto!'
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default AuthCard
