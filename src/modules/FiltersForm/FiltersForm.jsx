import { Form, Formik } from 'formik'
import clsx from 'clsx'
import { classByType } from './data/classByType'
import Selector from '@/ui/Selector/Selector'
import Checkbox from '@/ui/Checkbox/Checkbox'
import CheckboxContent from './ui/CheckboxContent'
import Radio from '@/ui/Radio/Radio'

const initialValues = {
	brand: '',
	model: '',
	registerDate: '',
	kilometersTo: '',
	paymentMethod: 'cash',
	priceUntil: '',
	cityOrZipCode: '',
	onlyElectricCars: false,
}

const FiltersForm = ({ openIndex, vehiclesFields }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={values => console.log(values)}
		>
			<Form className='grid grid-cols-2 gap-lg-strong w-full items-center bg-black-soft-bg p-lg-strong sm:grid-cols-[156px_1fr_1fr_1fr] md:grid-cols-4 lg:rounded-br-2xl lg:rounded-tr-2xl'>
				{vehiclesFields[openIndex !== 4 ? openIndex : 5].map(item => (
					<div
						className={clsx(classByType[item?.type] || classByType[item?.id])}
						key={item?.id}
					>
						{item?.type === 'selector' && (
							<Selector item={item} placeholder='Beliebig' name={item?.name} />
						)}

						{item?.type === 'checkbox' && (
							<Checkbox
								name={item?.name}
								labelClassName='items-center'
								wrapperClassName='col-span-2 inline-flex items-center gap-sm-plus font-bold text-md'
							>
								<CheckboxContent item={item} />
							</Checkbox>
						)}

						{item?.type === 'radio' && <Radio item={item} />}
					</div>
				))}
			</Form>
		</Formik>
	)
}

export default FiltersForm
