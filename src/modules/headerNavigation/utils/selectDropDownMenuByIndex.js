import { infoDropDownMenu } from '@/data/header/infoDropDownMenu'
import { searchDropDownMenu } from '@/data/header/searchDropDownMenu'
import { sellDropDownMenu } from '@/data/header/sellDropDownMenu'

export const selectDropDownMenuByIndex = index => {
	const dropDownMenu = [searchDropDownMenu, sellDropDownMenu, infoDropDownMenu]
	return dropDownMenu[index]
}
