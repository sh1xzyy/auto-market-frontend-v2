import Link from 'next/link'

const RegisterFormCheckboxContent = () => {
	return (
		<span className='text-md font-bold leading-[20px]'>
			Ich stimme der Nutzung meiner Daten zum Erhalt personalisierter
			E-Mail-Werbung von mobile.de (einschließlich E-Mail-Analyse) zu, wie in
			der&nbsp;
			<Link className='text-orange underline' href='/'>
				Einwilligungserklärung&nbsp;
			</Link>
			näher beschrieben. Ich kann diese Einwilligung jederzeit widerrufen.
		</span>
	)
}

export default RegisterFormCheckboxContent
