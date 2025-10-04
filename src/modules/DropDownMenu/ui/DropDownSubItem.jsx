import Link from 'next/link'

const DropDownSubItem = ({ item }) => {
	return (
		<li>
			<div className='flex items-center'>
				<Link
					className='block font-medium text-md p-md transition linear duration-300 hover:text-grey-muted hover:underline'
					href={item?.src}
				>
					{item?.label}
				</Link>
				{item?.isNew && (
					<span className='font-bold text-sm rounded-md px-md py-xxs bg-blue-soft'>
						NEU
					</span>
				)}
			</div>
		</li>
	)
}

export default DropDownSubItem
