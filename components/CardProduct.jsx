import React from 'react'
import Image from 'next/image'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { Result } from 'postcss'
import axios from 'axios'
import Link from 'next/link'

const CardProduct = ({ title, berat, satuanBerat, imgProduct, data }) => {
	return (
		<div className="w-[47%] h-auto bg-white shadow-lg flex flex-col items-center p-4 gap-4 rounded-lg">
			<Link href={`detail_product/${title}`}>
				<div className="flex flex-col gap-2">
					<img src={imgProduct} alt="" className="w-full h-[110px] " />
					<div className="desk flex flex-col justify-center items-center">
						<h1 className="font-bold">{title}</h1>
						<p className="text-md text-gray-500 font-light">
							{berat} {satuanBerat}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default CardProduct
