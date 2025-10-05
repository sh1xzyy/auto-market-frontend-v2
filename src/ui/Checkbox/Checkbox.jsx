'use client'

import { Field } from 'formik'
import Link from 'next/link'
import { GrFormCheckmark } from 'react-icons/gr'
import { useState } from 'react'
import clsx from 'clsx'

const Checkbox = ({ children }) => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div className='mb-lg-strong'>
			<label
				className='grid grid-cols-[auto_auto] items-start gap-x-sm-plus cursor-pointer'
				htmlFor='checkbox'
			>
				<div
					className={clsx(
						'flex justify-center items-center w-[20px] h-[20px] border border-grey-light rounded-xs transition-colors linear duration-300',
						isChecked && 'bg-violet border-0'
					)}
				>
					{isChecked && <GrFormCheckmark size={20} />}
				</div>
				{children}
				<Field
					className='visually-hidden'
					value={isChecked}
					type='checkbox'
					onClick={() => setIsChecked(prev => !prev)}
					id='checkbox'
				/>
			</label>
		</div>
	)
}

export default Checkbox
