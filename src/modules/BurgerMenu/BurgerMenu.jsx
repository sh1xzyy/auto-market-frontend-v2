import BurgerMenuCloseButton from './ui/BurgerMenuCloseButton'

const BurgerMenu = ({ setIsBurgerMenuOpen }) => {
	return (
		<div className='fixed top-0 left-0 w-full h-full bg-overlay z-10'>
			<div className='fixed right-0 top-0 h-full w-[260px] bg-black-soft-bg flex flex-col'>
				<BurgerMenuCloseButton setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
			</div>
		</div>
	)
}

export default BurgerMenu
