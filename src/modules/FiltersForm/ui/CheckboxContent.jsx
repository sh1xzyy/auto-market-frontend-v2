const CheckboxContent = ({ item }) => {
	return (
		<div className='flex gap-xs'>
			<span>{item?.label}</span>
			{item?.icon}
		</div>
	)
}

export default CheckboxContent
