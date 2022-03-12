import { AiOutlineEye } from 'react-icons/ai'
const CardCmsBLogs = ({
	title = 'judul',
	image = 'https://www.bethesda.or.id/cni-content/uploads/modules/dokter/notfound.png',
	createdAt = '01 Jan 1970 ',
	views = 0,
}) => {
	return (
		<div className="w-[307px] h-[270px] bg-white shadow-md flex flex-col    ">
			<img src={image} alt="" className="w-full h-[200px] object-cover" />
			<div className="w-full h-full flex items-center p-2 justify-between">
				<div className="w-[70%] ">
					<h1 className="text-lg font-bold">{title}</h1>
					<p className="italic text-sm">created : {createdAt}</p>
				</div>
				<div className=" flex gap-1">
					<span className="text-xl">
						<AiOutlineEye />
					</span>
					<p className="text-sm">{views}</p>
				</div>
			</div>
		</div>
	)
}

export default CardCmsBLogs
