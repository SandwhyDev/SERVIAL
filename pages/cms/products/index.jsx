import React, { useState } from 'react'
import Navbar_Dashboard from '../../../components/Navbar_Dashboard'
import SearchBard from '../../../components/SearchBard'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import Image from 'next/image'
import test from '../../../assets/Data_security.png'
import { useRouter } from 'next/router'
import Table_Products from '../../../components/Table_Products'
import axios from 'axios'
import Total_product from '../../../components/Total_product'

export default function index({ data }) {
	console.log(data.total_data)
	const navigation = useRouter()
	const handleTambahProduct = () => {
		navigation.push('/cms/products/upload_products')
	}
	const [showUrut, setShowUrut] = useState(false)
	const handleUrut = () => {
		setShowUrut(!showUrut)
	}
	return (
		<div className="w-screen min-h-screen flex bg-gray-100">
			<Navbar_Dashboard />
			<div className="w-full h-screen flex flex-col gap-4 p-6">
				{/* <SearchBard /> */}

				<div className="hasil w-full h-14 flex items-center  justify-between">
					<Total_product total={data.total_data} />
					<div className="left flex gap-2 items-center">
						<div
							className="newProduct w-44 h-10 rounded-md bg-red-500 text-white flex items-center gap-2 justify-center p-2 cursor-pointer"
							onClick={handleTambahProduct}
						>
							<span className="text-xl font-bold">
								<AiOutlinePlus />
							</span>
							<h1>Tambah product</h1>
						</div>

						{/* <div
							className="filter w-36 h-8 bg-white border-[.5px] border-gray-500 flex items-center justify-center gap-2 rounded-md cursor-pointer"
							onClick={handleUrut}
						>
							<h1>Urutkan</h1>
							<span>
								<IoIosArrowDown />
							</span>
						</div> */}
					</div>
				</div>
				{showUrut && (
					<div className="border-[.5px] border-gray-500 bg-white fixed right-6 top-[115px] w-36 flex items-center justify-center">
						<ul className="w-full flex flex-col items-center gap-2 p-2">
							<li className="">Terbaru</li>
							<li className="">Favorite</li>
							<li>Harga Mahal</li>
							<li>Harga Murah</li>
						</ul>
					</div>
				)}

				<div className="w-full h-screen  flex flex-col  rounded-xl">
					<Table_Products />
				</div>
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const result = await axios.get('http://localhost:9000/api/product_read')
	console.log(result.data.total_data)
	return {
		props: {
			data: result.data,
		},
	}
}
