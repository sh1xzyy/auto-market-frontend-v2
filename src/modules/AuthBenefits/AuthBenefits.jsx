import { GrFormCheckmark } from 'react-icons/gr'
import { benefits } from './data/benefits'

const AuthBenefits = ({ title }) => {
	return (
		<div className='p-3xl'>
			<h3 className='text-xl font-bold mb-lg-strong md:max-w-[75%]'>{title}</h3>

			<ul className='flex flex-col gap-md-plus'>
				{benefits?.map((benefit, i) => (
					<li className='flex items-center gap-md-plus' key={i}>
						<GrFormCheckmark color='var(--color-green-light)' size={24} />
						<span className='font-bold'>{benefit}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default AuthBenefits
