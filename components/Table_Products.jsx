import axios from 'axios'
import React from 'react'

const Table_Products = ({ id, namaProduct, deskripsi, harga, berat, satuanberat, categories, image }) => {
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
					<td>{id}</td>
					<td>{namaProduct}</td>
					<td>{deskripsi}</td>
					<td>{harga}</td>
					<td>{berat}</td>
					<td>{satuanberat}</td>
					<td>{categories}</td>
					<td className="p-2 text-center flex items-center justify-center border-[.5px]">
						<img src={image} alt="photo product" className="w-[150px] h-[150px] object-cover " />
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Table_Products
