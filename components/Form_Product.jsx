import axios from 'axios'
import React from 'react'
import { Router, useRouter } from 'next/router'

const Form_Product = () => {
	const navigation = useRouter()

	const handleSubmit = (e) => {
		e.preventDefault()

		const fd = new FormData()
		fd.append('image', image.files[0])
		fd.append('title', title.value)
		fd.append('deskripsi', deskripsi.value)
		fd.append('categories', categories.value)
		fd.append('berat', berat.value)
		fd.append('satuan_berat', satuan_berat.value)
		fd.append('harga', harga.value)

		axios
			.post('http://localhost:9000/api/product_create', fd)
			.then((response) => {
				if (response.status == 200) {
					alert('berhasil')
					navigation.push('/cms/products')
				}
			})
			.catch((err) => {
				alert(err)

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
				<label htmlFor="title">Nama Product</label>
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
				<label htmlFor="deskripsi"></label>

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
				<label htmlFor="satuan_berat"></label>

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
				<label htmlFor="categories"></label>

				<select id="categories" name="categories" className="h-10 rounded-md p-2" required>
					<option hidden={true}>Categori</option>
					<option value="makanan">Makanan</option>
					<option value="accesories">Accesories</option>
					<option value="obat">Obat</option>
				</select>
			</div>

			<div className="form_group flex flex-col gap-2 w-full">
				<label htmlFor="harga"></label>

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
				<label htmlFor="image"></label>

				<input
					type="file"
					id="image"
					name="image"
					className=" p-2 w-full outline-none focus:outline-blue-500 rounded-md bg-white"
					placeholder="image"
				/>
			</div>

			<button
				className=" p-2 w-full outline-none focus:outline-blue-500 rounded-md bg-red-500 text-white border-[.5px] border-white"
				type="submit"
			>
				Upload Product
			</button>
		</form>
	)
}

export default Form_Product
