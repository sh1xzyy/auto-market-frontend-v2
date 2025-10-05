'use client'

import { ErrorMessage, Field } from 'formik'
import { inputStyles } from './inputStyles'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useState } from 'react'

const PasswordInput = ({ name, label, placeholder }) => {
	const [isPasswordOpen, setIsPasswordOpen] = useState(false)

	return (
		<div>
			{label && (
				<label className='block mb-sm text-md font-bold' htmlFor={name}>
					{label}
				</label>
			)}
			<div className='relative'>
				<Field
					className={inputStyles}
					type={isPasswordOpen ? 'text' : 'password'}
					name={name}
					id={name}
					placeholder={placeholder}
				/>
				<button
					className='absolute top-1/2 right-[18px] -translate-y-1/2'
					type='button'
					onClick={() => setIsPasswordOpen(prev => !prev)}
				>
					{isPasswordOpen ? (
						<FaRegEyeSlash size={16} />
					) : (
						<FaRegEye size={16} />
					)}
				</button>
				<ErrorMessage name={name} component='span' />
			</div>
		</div>
	)
}

export default PasswordInput
