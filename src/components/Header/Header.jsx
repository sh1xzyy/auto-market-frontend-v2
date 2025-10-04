'use client'

import Container from '../Container/Container'
import Logo from '@/ui/Logo/Logo'
import useWindowWidth from '@/hooks/useWindowWidth'
import { usePathname } from 'next/navigation'
import { MainNavigation, UserNavigation } from '@/modules/headerNavigation'
import { useState } from 'react'
import RegisterLink from '@/ui/RegisterLink/RegisterLink'
import { FaRegBell } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import IconButton from '@/ui/IconButton/IconButton'
import BurgerMenu from '@/modules/BurgerMenu/BurgerMenu'

const Header = () => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
	const { windowWidth } = useWindowWidth()
	const pathName = usePathname()
	const isPathAuth = pathName === '/auth'

	return (
		<>
			{isBurgerMenuOpen && !isPathAuth && (
				<BurgerMenu setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
			)}
			<div className='flex items-center h-[72px] bg-black-soft-bg shadow-header'>
				<Container className='px-lg-strong'>
					<nav className='flex items-center justify-between'>
						<Logo />

						{windowWidth <= 755 && !isPathAuth && (
							<div>
								{windowWidth > 575 && (
									<IconButton
										icon={FaRegBell}
										className='px-md py-md'
										ariaLabel='Notifications button'
									/>
								)}
								<IconButton
									icon={GiHamburgerMenu}
									className='px-md py-md'
									onClick={() => setIsBurgerMenuOpen(true)}
									ariaLabel='Burger Menu button'
								/>
							</div>
						)}

						{windowWidth > 755 && !isPathAuth && (
							<>
								<MainNavigation />
								<div className='flex items-center'>
									<UserNavigation windowWidth={windowWidth} />
									{windowWidth >= 1014 && <RegisterLink className='ml-lg' />}
								</div>
							</>
						)}
					</nav>
				</Container>
			</div>
		</>
	)
}

export default Header
