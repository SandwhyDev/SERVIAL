import React from 'react'
import ax from '../../libs/ax'

const DetailBlog = ({ data }) => {
	return (
		<div className="w-screen h-screen bg-slate-100 flex flex-col items-center">
			<img src={data.banner.location} alt="" className="w-full h-[200px] object-cover" />
			<h1>Detail BLog {data.title}</h1>
			<p>{data.body}</p>
		</div>
	)
}

export async function getServerSideProps(ctx) {
	const result = await ax.get(`/blog_read/${ctx.params.title}`)
	console.log(result.data.query)
	return {
		props: {
			title: ctx.params.title,
			data: await result.data.query,
		},
	}
}
export default DetailBlog
