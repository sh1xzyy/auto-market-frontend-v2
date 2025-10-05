import IconButton from '@/ui/IconButton/IconButton'
import clsx from 'clsx'

const VehiclesItem = ({
	openIndex,
	setOpenIndex,
	setIsOtherFiltersOpen,
	index,
	arr,
	item,
}) => {
	return (
		<li
			className={clsx(
				'border-r border-b border-grey-deep w-full md:last:border-b-0',
				openIndex === index &&
					'border-b-black-soft-bg md:border-grey-deep md:border-r-0'
			)}
		>
			<IconButton
				className={clsx(
					'flex items-center justify-center p-md w-full',
					openIndex !== index && 'bg-black hover:bg-black-soft-bg',
					openIndex === index && 'bg-black-soft-bg',
					index === 0 && 'lg:rounded-tl-2xl',
					index === arr.length - 1 && 'lg:rounded-bl-2xl'
				)}
				iconClassName={clsx(openIndex === index && 'fill-orange')}
				icon={item?.icon}
				size={30}
				ariaLabel={item?.ariaLabel}
				onClick={() => {
					setOpenIndex(index)
					setIsOtherFiltersOpen(false)
				}}
			/>
		</li>
	)
}

export default VehiclesItem
