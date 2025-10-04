import { FaRegBell, FaRegStar } from 'react-icons/fa'
import { RiParkingBoxLine } from 'react-icons/ri'
import { FaRegUserCircle } from 'react-icons/fa'

const linkIconsStyle =
	'fill-grey-light transition linear duration-300 group-hover:fill-white'

export const userDesktopNavigation = [
	{
		type: 'button',
		icon: FaRegBell,
		ariaLabel: 'Notifications button',
	},
	{
		type: 'link',
		src: '/',
		icon: <FaRegStar key='star' className={linkIconsStyle} size={20} />,
		ariaLabel: 'my favorites link',
	},
	{
		type: 'link',
		src: '/',
		icon: (
			<RiParkingBoxLine key='parking' className={linkIconsStyle} size={20} />
		),
		ariaLabel: 'parking link',
	},
]

export const userTabletNavigation = [
	{
		type: 'button',
		icon: FaRegBell,
		ariaLabel: 'Notifications button',
	},
	{
		type: 'button',
		icon: FaRegUserCircle,
		ariaLabel: 'Profile button',
	},
]
