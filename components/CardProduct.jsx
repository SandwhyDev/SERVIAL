import React from 'react'
import Image from 'next/image'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { Result } from 'postcss'
import axios from 'axios'

const CardProduct = ({ title, berat, satuanBerat, imgProduct, data }) => {
	return (
		<div className="w-[47%] h-auto bg-white shadow-lg flex flex-col items-center p-4 gap-4 rounded-lg">
			<img src={imgProduct} alt="" />
			<div className="desk flex flex-col">
				<h1 className="font-bold">{title}</h1>
				<p className="text-sm text-gray-500 font-light">
					{berat} {satuanBerat}
				</p>
			</div>

			{/* <button
        className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center"
        onClick={handleButton}
      >
        <span className="text-white text-xl">
          <AiOutlinePlus />
        </span>
      </button> */}
		</div>
	)
}

export default CardProduct
