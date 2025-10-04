'use client'

import { MainNavigation, UserNavigation } from '@/modules'
import Container from '../Container/Container'
import Logo from '@/ui/Logo/Logo'
import useWindowWidth from '@/hooks/useWindowWidth'

const Header = () => {
	const { windowWidth } = useWindowWidth()
	return (
		<div className='flex items-center h-[72px] bg-black-soft-bg shadow-header'>
			<Container className='px-lg-strong'>
				<nav className='flex items-center justify-between'>
					<Logo />

					{windowWidth > 755 && (
						<>
							<MainNavigation />
							<UserNavigation windowWidth={windowWidth} />
						</>
					)}
				</nav>
			</Container>
		</div>
	)
}

export default Header
