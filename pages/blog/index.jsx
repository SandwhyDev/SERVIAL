import React from 'react'
import CardBLog from '../../components/CardBLog'
import Navbar from '../../components/Navbar'
import ax from '../../libs/ax'

const index = ({ data }) => {
	return (
		<div className="w-screen min-h-screen bg-gray-100">
			<Navbar />

			<div className="main mt-12 p-4 flex flex-col gap-4">
				{data.map((e) => {
					return <CardBLog title={e.title} body={e.body} img={e.banner.location} tanggal={e.createdAt.split('T')[0]} />
				})}
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const result = await ax.get('/blog_read')

	return {
		props: {
			data: result.data.query,
		},
	}
}

export default index
