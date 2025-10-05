import clsx from 'clsx'
import { useFormikContext } from 'formik'
import { GrFormCheckmark } from 'react-icons/gr'

const PasswordRequirements = () => {
	const { values } = useFormikContext()
	const password = values.password
	const passwordRequirements = [
		'Min. 8 Zeichen',
		'Buchstaben',
		'Zahlen oder Sonderzeichen !$%?-_+#',
	]

	return (
		<div className='mb-lg-strong'>
			<ul className='grid grid-cols-[max-content_auto] gap-y-md-plus gap-x-lg-strong'>
				{passwordRequirements.map((label, i) => {
					const isValid =
						(i === 0 && password.length >= 8) ||
						(i === 1 && /[A-Za-z]/.test(password)) ||
						(i === 2 && /[!$%?\-_\+#]/.test(password))

					return (
						<li className={clsx('flex items', i === 2 && 'col-span-2')} key={i}>
							<div
								className={clsx(
									'flex items-center justify-center w-[15px] h-[15px] border border-grey-muted rounded-[50%] mr-sm-plus transition-colors linear duration-300',
									isValid && 'bg-green-light border-0'
								)}
							>
								{isValid && (
									<GrFormCheckmark color='var(--color-black)' size={20} />
								)}
							</div>
							<span className='text-md text-grey-light'>{label}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default PasswordRequirements
