'use client'

import { DiApple } from 'react-icons/di'
import { FcGoogle } from 'react-icons/fc'
import { socialButtonsStyle } from './styles'

const SocialAuthButtons = ({ googleLabel, appleLabel }) => {
	return (
		<div className='flex flex-col gap-md-plus mb-md-plus'>
			<button
				className={socialButtonsStyle}
				type='button'
				onClick={() => console.log(googleLabel)}
			>
				<FcGoogle size={18} />
				<span className='font-bold sm:text-md'>{googleLabel}</span>
			</button>
			<button
				className={socialButtonsStyle}
				type='button'
				onClick={() => console.log(appleLabel)}
			>
				<DiApple color='var(--color-light-white)' size={18} />
				<span className='font-bold sm:text-md'>{appleLabel}</span>
			</button>
		</div>
	)
}

export default SocialAuthButtons
