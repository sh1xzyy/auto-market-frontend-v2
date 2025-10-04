import MainNavigation from '@/modules/headerNavigation/MainNavigation/MainNavigation'
import Container from '../Container/Container'
import Logo from '@/ui/Logo/Logo'

const Header = () => {
	return (
		<div className='flex items-center h-[72px] bg-black-soft-bg shadow-header'>
			<Container className='px-lg-strong'>
				<nav className='flex items-center justify-between'>
					<Logo />
					<MainNavigation />
				</nav>
			</Container>
		</div>
	)
}

export default Header
