const SubmitButtonContent = ({ item, vehicleQuantity }) => {
	return (
		<>
			{item?.icon}
			<span className='font-bold text-md'>
				{vehicleQuantity}&nbsp;{item?.label}
			</span>
		</>
	)
}

export default SubmitButtonContent
