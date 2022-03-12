import React from 'react'
import Link from 'next/link'
const CardBLog = ({
	title = 'servial.com',
	body = 'ini body',
	tanggal = '23/02/2022',
	img = 'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
}) => {
	return (
		<div>
			<Link href={`/blog/${title}`}>
				<div className="CardBlog w-full h-[400px] shadow-lg flex flex-col gap-2">
					<img src={img} alt="" className="w-screen h-[70%] object-cover" />
					<div className="deskripsi flex flex-col gap-1 px-4 pb-2">
						<h1 className="font-bold">{title}</h1>
						<p className="text-gray-500">{body}</p>
						<p className="text-sm text-gray-500">{tanggal}</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default CardBLog
