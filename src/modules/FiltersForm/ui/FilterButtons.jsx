import Link from 'next/link'
import { filterButtonsStyles } from './filterButtonsStyles'

const FilterButtons = ({ item: { actionButton, navigationButton } }) => {
	return (
		<>
			<button className={filterButtonsStyles}>
				{actionButton?.icon}
				<span className='font-bold text-md'>{actionButton?.label}</span>
			</button>
			<Link href={navigationButton?.href} className={filterButtonsStyles}>
				{navigationButton?.icon}
				<span className='font-bold text-md'>{navigationButton?.label}</span>
			</Link>
		</>
	)
}

export default FilterButtons
