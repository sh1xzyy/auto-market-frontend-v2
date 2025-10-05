import BurgerDropDownMenuItemList from './BurgerDropDownMenuItemList'

const BurgerDropDownMenuList = ({ list }) => {
	return (
		<ul>
			{list?.map((item, i) => (
				<li key={i} className='flex flex-col'>
					{item?.title && (
						<span className='block text-sm text-grey-muted px-2xl mt-md'>
							{item?.title}
						</span>
					)}

					<BurgerDropDownMenuItemList list={item?.list} />
				</li>
			))}
		</ul>
	)
}

export default BurgerDropDownMenuList
