import { vehiclesList } from './data/vehiclesList'
import VehiclesItem from './ui/VehiclesItem'

const VehiclesList = ({ openIndex, setOpenIndex, setIsOtherFiltersOpen }) => {
	return (
		<ul className='flex justify-center md:min-w-[90px] md:flex-col'>
			{vehiclesList.map((item, i, arr) => (
				<VehiclesItem
					key={i}
					item={item}
					index={i}
					arr={arr}
					openIndex={openIndex}
					setOpenIndex={setOpenIndex}
					setIsOtherFiltersOpen={setIsOtherFiltersOpen}
				/>
			))}
		</ul>
	)
}

export default VehiclesList
