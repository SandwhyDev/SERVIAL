import Image from 'next/image'
import React from 'react'
import Navbar_Dashboard from '../../../components/Navbar_Dashboard'
import { AiOutlinePlus } from 'react-icons/ai'
import CardCmsBLogs from '../../../components/CardCmsBlogs'
import { useState } from 'react'
import FormUploadsBLogs from '../../../components/FormUploadsBLogs'
import ax from '../../../libs/ax'
const index = ({ data, total_data }) => {
	const [upload, setUpload] = useState(false)

	const handleUpload = () => {
		setUpload(!upload)
	}
	return (
		<div className="w-full h-screen flex bg-slate-100 ">
			<Navbar_Dashboard />

			<div className="main flex flex-col items-center w-full h-screen gap-2 p-8 relative ">
				{upload && (
					<div className="w-full h-full bg-slate-200/70 absolute top-0 flex flex-col items-center justify-center">
						<h1 className="text-red-500 fixed top-[90px] right-[440px] text-2xl cursor-pointer" onClick={handleUpload}>
							X
						</h1>
						<FormUploadsBLogs />
					</div>
				)}
				<div className="w-full h-12 flex items-center justify-between">
					<h1 className="text-xl font-semibold">{total_data} Blogs</h1>
					<div
						className="w-36 h-full bg-red-400 flex items-center justify-center p-2 gap-2 text-white rounded-md cursor-pointer  "
						onClick={handleUpload}
					>
						<span>
							<AiOutlinePlus />
						</span>
						<h1>Upload Blog</h1>
					</div>
				</div>
				<div className="w-full  flex items-start justify-start gap-4 flex-wrap">
					{data.map((e) => {
						return (
							<CardCmsBLogs
								title={e.title}
								createdAt={e.createdAt.split(':')[0].split('T')[0]}
								image={e.banner.location}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const result = await ax.get('/blog_read')
	console.log(result.data)
	return {
		props: {
			data: result.data.query,
			total_data: result.data.total_data,
		},
	}
}

export default index
