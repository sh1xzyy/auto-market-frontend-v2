import clsx from 'clsx'
import DropDownItemMain from './DropDownItemMain'
import DropDownItemList from './DropDownItemList'

const DropDownMainList = ({ list }) => {
	return (
		<ul className='flex gap-lg-strong'>
			{list.map((item, i) => {
				return (
					<li key={i}>
						<span
							className={clsx(
								'block text-sm text-dark-grey',
								i !== 0 && 'px-md',
								i === 0 && 'mb-md'
							)}
						>
							{item.title}
						</span>
						{i === 0 ? (
							<DropDownItemMain item={item} />
						) : (
							<DropDownItemList list={item.list} />
						)}
					</li>
				)
			})}
		</ul>
	)
}

export default DropDownMainList
