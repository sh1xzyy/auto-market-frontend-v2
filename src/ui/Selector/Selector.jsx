'use client'

import IconButton from '../IconButton/IconButton'
import Select from 'react-select'
import { selectorStyles } from './styles'

const temporaryData = [
	{ value: 'bmw', label: 'Bmw' },
	{ value: 'audi', label: 'Audi' },
	{ value: 'mercedes', label: 'Mercedes' },
]

const Selector = ({ item, wrapperClassName, placeholder, name, settings }) => {
	return (
		<div className={wrapperClassName}>
			<label
				className='flex items-center gap-sm-plus font-bold text-md mb-sm'
				htmlFor={item?.id}
			>
				{item?.label}
				{item?.labelIcon && (
					<IconButton
						icon={item?.labelIcon}
						size={16}
						onClick={() => console.log('some drop down menu')}
						ariaLabel={item?.ariaLabel}
					/>
				)}
			</label>
			<Select
				options={temporaryData}
				styles={selectorStyles}
				name={name}
				id={name}
				instanceId={name}
				placeholder={placeholder}
				{...settings}
			/>
		</div>
	)
}

export default Selector
