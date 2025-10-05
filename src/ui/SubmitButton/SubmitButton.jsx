const SubmitButton = ({ children }) => {
	return (
		<button className='flex items-center justify-center gap-sm-plus w-full h-[36px] text-white bg-orange rounded-md transition-colors linear duration-300 hover:bg-orange-dark'>
			{children}
		</button>
	)
}

export default SubmitButton
