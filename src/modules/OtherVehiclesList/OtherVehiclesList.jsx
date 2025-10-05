import clsx from 'clsx'
import OtherVehiclesItem from './ui/OtherVehiclesItem'

const OtherVehiclesList = ({ list, setIsOtherFiltersOpen }) => {
	return (
		<ul className='w-full grid grid-cols-3 items-center md:grid-cols-5 bg-black-soft-bg md:p-md lg:rounded-tr-2xl lg:rounded-br-2xl'>
			{list?.map((item, i) => (
				<OtherVehiclesItem
					key={i}
					item={item}
					index={i}
					setIsOtherFiltersOpen={setIsOtherFiltersOpen}
				/>
			))}
		</ul>
	)
}

export default OtherVehiclesList
