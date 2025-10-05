import { AuthBenefits } from '@/modules/AuthBenefits'
import { AuthCard } from '@/modules/AuthCard'

const Auth = () => {
	return (
		<div className='md:grid md:grid-cols-2 md:gap-lg-strong'>
			<AuthCard />
			<AuthBenefits title='Deine Vorteile mit einem mobile.de Konto' />
		</div>
	)
}

export default Auth
