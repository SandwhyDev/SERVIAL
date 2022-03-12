import React from 'react'
import ax from '../../libs/ax'
import { BiArrowBack, BiShareAlt } from 'react-icons/bi'
import useRouter from 'next/router'

const DetailProduct = ({ data }) => {
	const handleBack = () => {
		useRouter.push('/')
	}

	const handleBeli = () => {
		useRouter.push('/keranjang')
	}
	return (
		<div className="w-screen min-h-screen flex flex-col ">
			<div className="w-full h-12  flex items-center justify-between shadow-md p-4 bg-white ">
				<span className="text-xl " onClick={handleBack}>
					<BiArrowBack />
				</span>
				<h1 className="text-xl ">{data.title}</h1>
				<span className="text-xl">
					<BiShareAlt />
				</span>
			</div>
			<div className="w-screen h-screen bg-gray-300 ">
				<img src={data.photo[0]?.location} alt={data.title} className="w-full h-[300px] object-cover bg-white" />
				<div className="w-full  flex flex-col gap-1">
					<div className="w-full  p-4 flex flex-col gap-1 bg-white">
						<h1 className="text-2xl font-bold">Rp{data.harga}</h1>
						<h1 className="text-lg">{data.title}</h1>
					</div>

					<div className="w-full  p-4 flex flex-col gap-1 bg-white mb-10">
						<h1 className="text-lg font-bold">Detail Produk</h1>
						<p>
							Berat : {data.berat} {data.satuan_berat}
						</p>
						<p>Min. Pembelian : 1</p>
						<hr className="bg-black mb-2" />

						<p>{data.deskripsi}</p>
					</div>
				</div>
			</div>

			<div className="w-full h-12 mt-12 bg-white fixed bottom-0 shadow-2xl flex justify-between ">
				<button className="w-[50%] border-2 capitalize ">Tambah Keranjang</button>
				<button className="w-[50%] text-white capitalize bg-red-500" onClick={handleBeli}>
					beli
				</button>
			</div>
		</div>
	)
}

export async function getServerSideProps(ctx) {
	const result = await ax.get(`/product_read/${ctx.params.title}`)
	return {
		props: {
			title: ctx.params.title,
			data: result.data.query,
		},
	}
}
export default DetailProduct