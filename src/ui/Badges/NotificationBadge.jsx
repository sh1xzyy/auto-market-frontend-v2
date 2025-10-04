import React from 'react'

const NotificationBadge = ({ quantity = 4 }) => {
	return (
		<span className='absolute top-0 left-0 h-[18px] w-[18px] flex items-center justify-center rounded-[50%] bg-orange font-bold text-sm'>
			{quantity}
		</span>
	)
}

export default NotificationBadge
