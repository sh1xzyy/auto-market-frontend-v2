import MainFilters from '@/components/MainFilters/MainFilters'
import MainImage from '@/components/MainImage/MainImage'

export default function Home() {
	return (
		<>
			<h1 className='visually-hidden'>
				Go mobile. Find what&apos;s best for you - on Germany&apos;s biggest
				vehicle marketplace
			</h1>

			<MainImage />

			<section className='pb-sm-plus mt-[405px]'>
				<MainFilters />
			</section>
		</>
	)
}
