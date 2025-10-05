import clsx from 'clsx'

const OtherVehiclesItem = ({ index, item, setIsOtherFiltersOpen }) => {
	return (
		<li
			className={clsx(
				'flex justify-center items-center border-r border-b border-grey-deep md:h-full',
				[2, 5, 8].includes(index) && 'border-r-0 md:border-r',
				[6, 7, 8].includes(index) && 'border-b-0',
				index === 5 && 'md:border-b-0',
				index === 4 && 'md:border-r-0'
			)}
		>
			<button
				className='flex flex-col gap-sm-plus items-center w-full p-md sm:p-lg-strong transition-colors linear duration-300 md:py-auto md:px-0 hover:bg-black'
				type='button'
				onClick={() => {
					setIsOtherFiltersOpen(true)
				}}
			>
				{item?.icon}
				<span className='text-xs sm:text-sm'>{item?.label}</span>
			</button>
		</li>
	)
}

export default OtherVehiclesItem
