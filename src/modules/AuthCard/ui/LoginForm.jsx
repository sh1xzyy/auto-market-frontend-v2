import { Form, Formik } from 'formik'
import Link from 'next/link'
import Input from '@/ui/input/Input'
import PasswordInput from '@/ui/input/PasswordInput'
import AuthSubmitButton from './AuthSubmitButton'

const LoginForm = () => {
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
					<PasswordInput
						wrapperClassName='mb-md-plus'
						name='password'
						label='Passwort'
					/>

					<Link
						className='block text-md font-bold underline mb-lg-strong'
						href='/'
					>
						Passwort vergessen?
					</Link>

					<AuthSubmitButton label='Anmelden' />
				</Form>
			)}
		</Formik>
	)
}

export default LoginForm
