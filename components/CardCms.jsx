const CardCms = ({ title = 'Title', total_data = 0 }) => {
	return (
		<div className="w-[350px] h-[200px] bg-blue-500/40 flex flex-col items-center justify-between p-2 gap-2 rounded-md">
			<h1 className="text-2xl font-bold">{title}</h1>
			<p className="text-4xl font-light">{total_data}</p>
			<p></p>
		</div>
	)
}

export default CardCms
