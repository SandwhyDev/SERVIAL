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
				<div>
					<img src={imgProduct} alt="" />
					<div className="desk flex flex-col">
						<h1 className="font-bold">{title}</h1>
						<p className="text-sm text-gray-500 font-light">
							{berat} {satuanBerat}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default CardProduct
