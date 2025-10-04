import DropDownSubItem from './DropDownSubItem'

const DropDownItemList = ({ list }) => {
	return (
		<ul>
			{list?.map((item, i) => (
				<DropDownSubItem key={i} item={item} />
			))}
		</ul>
	)
}

export default DropDownItemList
