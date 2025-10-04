import Image from 'next/image'
import Link from 'next/link'

const DropDownItemMain = ({ item: { thumb, moreInfo } }) => {
	return (
		<>
			<Image
				className='rounded-md object-cover'
				src={thumb?.src}
				width={160}
				height={105}
				alt={thumb?.alt}
			/>
			<Link
				className='block font-medium -ml-md mt-md p-md text-md text-grey-muted transition linear duration-300 hover:text-white-muted hover:underline'
				href={moreInfo?.src}
			>
				{moreInfo?.label}
			</Link>
		</>
	)
}

export default DropDownItemMain
