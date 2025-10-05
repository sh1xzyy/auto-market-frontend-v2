'use client'

import clsx from 'clsx'

const AuthTabs = ({ activeIndex, setActiveIndex }) => {
	return (
		<div className='flex items-center justify-between'>
			<button
				className={clsx(
					'w-full h-[54px] font-bold border-b border-r border-grey-deep transition-colors linear duration-300 md:rounded-tl-lg',
					activeIndex === 0
						? 'text-orange bg-black-soft-bg border-b-0'
						: 'bg-black'
				)}
				type='button'
				onClick={() => setActiveIndex(0)}
			>
				Einloggen
			</button>
			<button
				className={clsx(
					'w-full h-[54px] font-bold border-b border-grey transition-colors linear duration-300 md:rounded-tr-lg',
					activeIndex === 1
						? 'text-orange bg-black-soft-bg border-b-0'
						: 'bg-black'
				)}
				type='button'
				onClick={() => setActiveIndex(1)}
			>
				Registrieren
			</button>
		</div>
	)
}

export default AuthTabs
