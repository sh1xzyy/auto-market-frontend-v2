import { RiParkingBoxLine } from 'react-icons/ri'
import { BsCalculatorFill } from 'react-icons/bs'
import { FaRegStar } from 'react-icons/fa'
import { MdOutlineWindow } from 'react-icons/md'
import { MdOutlineSell } from 'react-icons/md'

const linkIconsStyle =
	'fill-grey-light transition linear duration-300 group-hover:fill-white'

export const overview = {
	title: '',
	list: [
		{
			label: 'Übersicht',
			src: '',
			isNeu: false,
			icon: (
				<MdOutlineWindow key='window' className={linkIconsStyle} size={16} />
			),
		},
	],
}

export const buy = {
	title: 'Kaufen',
	list: [
		{
			label: 'Meine Suchen',
			src: '',
			isNeu: false,
			icon: <FaRegStar key='star' className={linkIconsStyle} size={16} />,
		},
		{
			label: 'Parkplatz',
			src: '',
			isNeu: false,
			icon: (
				<RiParkingBoxLine key='parking' className={linkIconsStyle} size={16} />
			),
		},
		{
			label: 'Finanzierung',
			src: '',
			isNeu: false,
			icon: (
				<BsCalculatorFill
					key='calculator'
					className={linkIconsStyle}
					size={16}
				/>
			),
		},
	],
}

export const sell = {
	title: 'Verkaufen',
	list: [
		{
			label: 'Direkt-Verkauf',
			src: '',
			isNeu: false,
			icon: <MdOutlineSell key='sell' className={linkIconsStyle} size={16} />,
		},
	],
}
