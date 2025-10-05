const AuthSubmitButton = ({ label }) => {
	return (
		<button
			className='w-full py-lg-strong px-xl bg-orange rounded-md font-bold sm:px-lg-strong sm:py-lg sm:h-[44px] sm:text-md transition-colors linear duration-300 hover:bg-orange-dark'
			type='submit'
		>
			{label}
		</button>
	)
}

export default AuthSubmitButton
