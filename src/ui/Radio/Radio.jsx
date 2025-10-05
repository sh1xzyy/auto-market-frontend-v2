'use client'

import clsx from 'clsx'
import { Field, useFormikContext } from 'formik'

const Radio = ({ item }) => {
	const { values } = useFormikContext()

	return (
		<>
			<span className='block font-bold text-md mb-sm'>{item?.label}</span>

			<div
				className='flex justify-between w-full border border-grey-deep rounded-md'
				role='group'
			>
				{item?.radioList?.map(radio => {
					const isChecked = values[radio?.name] === radio?.value
					return (
						<label
							key={radio?.id}
							className={clsx(
								'm-auto w-full text-center p-md cursor-pointer border-r border-grey-deep last:border-0',
								isChecked && 'shadow-card rounded-xs'
							)}
						>
							<Field
								className='visually-hidden'
								name={radio?.name}
								value={radio?.value}
								type='radio'
								id={radio?.name}
							/>
							<span className='text-md '>{radio?.label}</span>
						</label>
					)
				})}
			</div>
		</>
	)
}

export default Radio
