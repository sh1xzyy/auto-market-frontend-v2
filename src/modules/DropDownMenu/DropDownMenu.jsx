import clsx from 'clsx'
import { TiArrowSortedUp } from 'react-icons/ti'

const DropDownMenu = ({ className = '', iconClassName = '', children }) => {
	return (
		<div
			className={clsx(
				'absolute h-auto top-[70px] rounded-lg bg-black-soft-bg z-[10] dropDownAnimation',
				className
			)}
		>
			{children}
			<TiArrowSortedUp
				className={clsx(
					'absolute -top-[24px] text-black-soft-bg',
					iconClassName
				)}
				size={40}
			/>
		</div>
	)
}

export default DropDownMenu
