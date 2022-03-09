import React from 'react'

const Total_product = ({ total = 0 }) => {
	return (
		<div className="product flex gap-2 items-center">
			<h1 className="text-xl font-bold">{total}</h1>
			<h1 className="text-xl font-semibold">Products</h1>
		</div>
	)
}

export default Total_product
