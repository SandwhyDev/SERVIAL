import axios from 'axios'
import React from 'react'

const Table_Products = () => {
	return (
		<table className="customTable rounded-md">
			<thead>
				<tr>
					<th>id</th>
					<th>Nama product</th>
					<th>deskripsi</th>
					<th>harga</th>
					<th>berat</th>
					<th>satuan berat</th>
					<th>categories</th>
					<th>image</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>whisky</td>
					<td>ini deskripsi</td>
					<td>Rp. 20000</td>
					<td>200</td>
					<td>gram</td>
					<td>makanan</td>
					<td className="p-2 text-center flex items-center justify-center border-[.5px]">
						<img
							src="https://images.pexels.com/photos/7048694/pexels-photo-7048694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt=""
							className="w-[250px] h-[150px] object-cover "
						/>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Table_Products
