import React from 'react'
import CardCms from '../../components/CardCms'
import Navbar_Dashboard from '../../components/Navbar_Dashboard'
import ax from '../../libs/ax'
import ReactAudioPlayer from 'react-audio-player'

const index = ({ total_data_users, total_data_products, total_data_blogs }) => {
	return (
		<div className="w-screen min-h-screen flex  bg-white">
			<Navbar_Dashboard />
			<div className="w-full p-8 flex flex-col  ">
				<div className="w-full flex flex-wrap gap-2">
					<CardCms title="Users" total_data={total_data_users} />
					<CardCms title="Products" total_data={total_data_products} />
					<CardCms title="Blogs" total_data={total_data_blogs} />
				</div>
			</div>
		</div>
	)
}

export async function getServerSideProps(ctx) {
	const total_data_users = await ax.get('/user_read')
	const total_data_products = await ax.get('/product_read')
	const total_data_blogs = await ax.get('/blog_read')
	return {
		props: {
			total_data_products: total_data_products.data.total_data,
			total_data_users: total_data_users.data.total_data,
			total_data_blogs: total_data_blogs.data.total_data,
		},
	}
}
export default index
