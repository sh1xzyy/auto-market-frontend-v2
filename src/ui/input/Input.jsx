import { ErrorMessage, Field } from 'formik'
import { inputStyles } from './inputStyles'

const Input = ({ name, label, type, placeholder, wrapperClassName }) => {
	return (
		<div className={wrapperClassName}>
			{label && (
				<label className='block mb-sm text-md font-bold' htmlFor={name}>
					{label}
				</label>
			)}
			<Field
				className={inputStyles}
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
			/>
			<ErrorMessage name={name} component='span' />
		</div>
	)
}

export default Input
