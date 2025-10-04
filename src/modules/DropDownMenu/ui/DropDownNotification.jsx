import { notifications } from '@/data/temporary/notifications'
import Image from 'next/image'
import Link from 'next/link'

const DropDownNotification = () => {
	return (
		<nav>
			<ul>
				{notifications.map(
					({ when, thumb, href, title, description, time }, i) => (
						<li key={i}>
							<span className='text-sm text-grey px-lg-strong'>{when}</span>

							<Link
								className='flex gap-lg p-lg-strong transition-colors linear duration-300 hover:bg-black-deep-bg'
								href={href}
							>
								<Image
									className='self-start rounded-lg object-contain'
									src={thumb?.src}
									width={60}
									height={60}
									alt={thumb?.alt}
								/>

								<div className='flex flex-col gap-sm-plus leading-5'>
									<span className='text-md font-bold'>{title}</span>
									<p className='text-md font-medium'>{description}</p>
									<span className='text-sm text-grey-muted'>{time}</span>
								</div>
							</Link>
						</li>
					)
				)}
			</ul>
		</nav>
	)
}

export default DropDownNotification
