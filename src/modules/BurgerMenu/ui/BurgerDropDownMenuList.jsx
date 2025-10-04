import BurgerDropDownMenuItemList from './BurgerDropDownMenuItemList'

const BurgerDropDownMenuList = ({ list }) => {
	return (
		<ul>
			{list?.map((item, i) => (
				<li key={i} className='flex flex-col'>
					<span className='block text-sm text-grey-muted px-md mt-md'>
						{item.title}
					</span>
					<BurgerDropDownMenuItemList list={item?.list} />
				</li>
			))}
		</ul>
	)
}

export default BurgerDropDownMenuList
