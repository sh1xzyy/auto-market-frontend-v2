import { Form, Formik } from 'formik'
import PasswordRequirements from './PasswordRequirements'
import Input from '@/ui/input/Input'
import PasswordInput from '@/ui/input/PasswordInput'
import RegisterFormCheckboxContent from './RegisterFormCheckboxContent'
import Checkbox from '@/ui/Checkbox/Checkbox'
import RegisterFormLegalText from './RegisterFormLegalText'
import AuthSubmitButton from './AuthSubmitButton'

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

					<Checkbox
						wrapperClassName='mb-lg-strong'
						labelClassName='items-start'
						isCheckedClassName='bg-violet border-0'
					>
						<RegisterFormCheckboxContent />
					</Checkbox>

					<RegisterFormLegalText />

					<AuthSubmitButton label='Registrieren' />
				</Form>
			)}
		</Formik>
	)
}

export default RegisterForm
