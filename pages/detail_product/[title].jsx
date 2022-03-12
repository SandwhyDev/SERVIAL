import React from 'react'
import ax from '../../libs/ax'

const DetailProduct = ({ data }) => {
	return (
		<div className="w-screen min-h-screen flex flex-col items-center justify-center">
			<h1>Detail Product {data.title} </h1>
		</div>
	)
}

export async function getServerSideProps(ctx) {
	const result = await ax.get(`/product_read/${ctx.params.title}`)
	console.log(result.data)
	return {
		props: {
			title: ctx.params.title,
			data: result.data.query,
		},
	}
}
export default DetailProduct
