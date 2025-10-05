import { Form, Formik } from 'formik'
import PasswordRequirements from './PasswordRequirements'

const RegisterForm = () => {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={(values, actions) => {
				console.log(values)
				actions.resetForm()
			}}
		>
			{() => (
				<Form>
					<Input
						wrapperClassName='mb-lg-strong'
						type='text'
						name='email'
						label='E-Mail-Adresse'
					/>
					<div className='mb-md-plus'>
						<PasswordInput
							wrapperClassName='mb-md-plus'
							name='password'
							label='Passwort'
						/>
						<PasswordRequirements />
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default RegisterForm
