import Link from 'next/link'

const RegisterFormLegalText = () => {
	return (
		<div className='mb-lg-strong'>
			<p className='text-md font-bold leading-[20px]'>
				Es gelten die mobile.de&nbsp;
				<Link className='text-orange underline' href='/'>
					AGB
				</Link>
				&nbsp;. Informationen zur Verarbeitung aller Daten werden in der
				mobile.de&nbsp;
				<Link className='text-orange underline' href='/'>
					Datenschutzerklärung
				</Link>
				&nbsp;beschrieben.
			</p>
		</div>
	)
}

export default RegisterFormLegalText
