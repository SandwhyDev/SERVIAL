import axios from 'axios'
import React from 'react'

const Form_Product = () => {
	const handleSubmit = (e) => {
		e.preventDefault()

		const { title, deskripsi, berat, satuan_berat, categories, harga, image } = e.target

		console.log({
			title: title.value,
			deskripsi: deskripsi.value,
			berat: berat.value,
			satuan_berat: satuan_berat.value,
			categories: categories.value,
			harga: harga.value,
			image: image.files[0],
		})

		// const formData = new FormData()

		axios
			.post(
				'http://localhost:9000/api/product_create',
				{
					Headers: {
						'Content-Type': 'multipart/form-data',
					},
				},
				{
					title: title.value,
					deskripsi: deskripsi.value,
					berat: berat.value,
					satuan_berat: satuan_berat.value,
					categories: categories.value,
					harga: harga.value,
					image: image.files[0],
				}
			)
			.then((response) => {
				if (response == 200) {
					alert('berhasil')
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<form
			className="w-[500px] h-auto border-4 flex flex-col items-center p-4 gap-4 bg-red-400 rounded-md"
			onSubmit={handleSubmit}
		>
			<h1 className="text-2xl text-white">UPLOAD PRODUCT</h1>
			<div className="form_group flex flex-col gap-2 w-full">
				<input
					type="text"
					id="title"
					name="title"
					className="border-[.5px] p-2 w-full outline-none focus:outline-blue-500 rounded-md"
					placeholder="Nama Product"
					required
				/>
			</div>

			<div className="form_group flex flex-col gap-2 w-full">
				<textarea
					name="deskripsi"
					id="deskripsi"
					cols="10"
					rows="5"
					placeholder="Deskripsi"
					className="border-[.5px] p-2 rounded-md "
					required
				></textarea>
			</div>

			<div className="w-full flex  gap-2 justify-between ">
				<input
					type="number"
					id="berat"
					name="berat"
					className="border-[.5px] p-2 w-[50%] outline-none focus:outline-blue-500 rounded-md"
					placeholder="Berat"
				/>
				<select id="satuan_berat" name="satuan_berat" className="h-10 rounded-md p-2 w-[50%]">
					<option hidden={true}>Berat Satuan</option>
					<option value="ons">Ons</option>
					<option value="gram">Gram</option>
					<option value="kg">Kilogram</option>
					<option value="l">Liter</option>
					<option value="ml">Mililiter</option>
				</select>
			</div>

			<div className="flex flex-col gap-2 w-full">
				<select id="categories" name="categories" className="h-10 rounded-md p-2" required>
					<option hidden={true}>Categori</option>
					<option value="makanan">Makanan</option>
					<option value="accesories">Accesories</option>
					<option value="obat">Obat</option>
				</select>
			</div>

			<div className="form_group flex flex-col gap-2 w-full">
				<input
					type="number"
					id="harga"
					name="harga"
					className="border-[.5px] p-2 w-full outline-none focus:outline-blue-500 rounded-md"
					placeholder="Harga"
					required
				/>
			</div>

			<div className="form_group flex flex-col gap-2 w-full">
				<input
					type="file"
					id="image"
					name="image"
					className=" p-2 w-full outline-none focus:outline-blue-500 rounded-md bg-white"
					placeholder="image"
				/>
			</div>

			<button className=" p-2 w-full outline-none focus:outline-blue-500 rounded-md bg-red-500 text-white border-[.5px] border-white">
				Upload Product
			</button>
		</form>
	)
}

export default Form_Product
