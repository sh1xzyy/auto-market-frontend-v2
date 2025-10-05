'use client'

import { Field } from 'formik'
import Link from 'next/link'
import { GrFormCheckmark } from 'react-icons/gr'
import { useState } from 'react'
import clsx from 'clsx'

const Checkbox = ({
	children,
	wrapperClassName,
	labelClassName,
	isCheckedClassName = '',
}) => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div className={wrapperClassName}>
			<label
				className={clsx(
					'grid grid-cols-[auto_auto] gap-x-sm-plus cursor-pointer',
					labelClassName
				)}
				htmlFor='checkbox'
			>
				<Field
					className='visually-hidden'
					value={isChecked}
					type='checkbox'
					onClick={() => setIsChecked(prev => !prev)}
					id='checkbox'
				/>
				<div
					className={clsx(
						'flex justify-center items-center w-[20px] h-[20px] border border-grey-muted rounded-xs transition-colors linear duration-300',
						isChecked && isCheckedClassName
					)}
				>
					{isChecked && <GrFormCheckmark size={20} />}
				</div>
				{children}
			</label>
		</div>
	)
}

export default Checkbox
