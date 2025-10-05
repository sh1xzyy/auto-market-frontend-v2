'use client'

import { VehiclesList } from '@/modules/VehiclesList'
import Container from '../Container/Container'
import { useState } from 'react'

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
			</div>
		</Container>
	)
}

export default MainFilters
