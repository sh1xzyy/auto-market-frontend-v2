'use client'

import { VehiclesList } from '@/modules/VehiclesList'
import Container from '../Container/Container'
import { useState } from 'react'
import { vehiclesFields } from '@/data/vehiclesFields/formFields'
import FiltersForm from '@/modules/FiltersForm/FiltersForm'
import { OtherVehiclesList } from '@/modules/OtherVehiclesList'

const MainFilters = () => {
	const [openIndex, setOpenIndex] = useState(0)
	const [isOtherFiltersOpen, setIsOtherFiltersOpen] = useState(false)

	return (
		<Container>
			<div className='w-full border border-grey-deep md:flex lg:rounded-2xl'>
				<VehiclesList
					openIndex={openIndex}
					setOpenIndex={setOpenIndex}
					setIsOtherFiltersOpen={setIsOtherFiltersOpen}
				/>

				{(isOtherFiltersOpen || openIndex !== vehiclesFields.length - 2) && (
					<FiltersForm vehiclesFields={vehiclesFields} openIndex={openIndex} />
				)}

				{openIndex === 4 && !isOtherFiltersOpen && (
					<OtherVehiclesList
						list={vehiclesFields[4]}
						setIsOtherFiltersOpen={setIsOtherFiltersOpen}
					/>
				)}
			</div>
		</Container>
	)
}

export default MainFilters
