import { FaRegUserCircle } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'

const linkIconsStyle =
	'fill-grey-light transition linear duration-300 group-hover:fill-white'

export const userInfo = [
	{
		title: 'Meine Suchen',
		src: '',
		icon: <FaRegStar key='star' className={linkIconsStyle} size={16} />,
	},
	{
		title: 'Parkplatz',
		src: '',
		icon: (
			<FaRegUserCircle key='profile' className={linkIconsStyle} size={16} />
		),
	},
]
