'use client'

import { useState } from 'react'
import AuthTabs from './ui/AuthTabs'
import AuthTitle from './ui/AuthTitle'
import SocialAuthButtons from './ui/SocialAuthButtons'
import Divider from './ui/Divider'
import LoginForm from './ui/LoginForm'
import RegisterForm from './ui/RegisterForm'

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
					<SocialAuthButtons
						googleLabel={
							activeIndex === 0
								? 'Mit Google anmelden'
								: 'Mit Google registrieren'
						}
						appleLabel={
							activeIndex === 0
								? 'Mit Apple anmelden'
								: 'Mit Apple registrieren'
						}
					/>
					<Divider />

					{activeIndex === 0 ? <LoginForm /> : <RegisterForm />}
				</div>
			</div>
		</div>
	)
}

export default AuthCard
