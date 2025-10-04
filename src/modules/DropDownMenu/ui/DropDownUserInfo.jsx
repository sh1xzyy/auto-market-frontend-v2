import Link from 'next/link'
import RegisterLink from '@/ui/RegisterLink/RegisterLink'
import { userInfo } from '@/data/temporary/userInfo'

const DropDownUserInfo = () => {
	return (
		<nav>
			<ul className='flex flex-col'>
				{userInfo.map(({ title, src, icon }, i) => (
					<li key={i} className='flex flex-col border-b border-grey-deep'>
						<Link
							className='flex items-center gap-sm-plus transition-colors linear duration-300 p-md text-md font-bold hover:underline hover:text-white'
							href={src}
						>
							<span>{icon}</span>
							<span>{title}</span>
						</Link>
					</li>
				))}
			</ul>
			<div className='mt-lg-strong mb-md'>
				<RegisterLink />
			</div>
		</nav>
	)
}

export default DropDownUserInfo
