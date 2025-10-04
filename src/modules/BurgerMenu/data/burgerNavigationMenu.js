import { counselor, toKnow } from '@/data/header/infoDropDownMenu'
import { buy, overview, sell } from '@/data/header/myCarMarket'
import { services, vehicleSearch } from '@/data/header/searchDropDownMenu'
import {
	dealerAreaList,
	privateAndCommercialList,
} from '@/data/header/sellDropDownMenu'

export const burgerNavMenu = [
	{ title: 'Mein mobile.de', list: [overview, buy, sell] },
	{ title: 'Suchen', list: [vehicleSearch, services] },
	{ title: 'Verkaufen', list: [privateAndCommercialList, dealerAreaList] },
	{ title: 'Informieren', list: [toKnow, counselor] },
]
