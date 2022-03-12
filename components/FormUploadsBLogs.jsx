import { AiOutlinePlus } from 'react-icons/ai'

const FormUploadsBLogs = () => {
	return (
		<form className="w-[400px] p-6 bg-white shadow-md flex flex-col gap-3 rounded-md">
			<h1 className="text-center text-2xl">Upload BLog</h1>
			<div className="form_group flex flex-col gap-2">
				<label htmlFor="title" className="text-xl ">
					Judul
				</label>
				<input type="text" id="title" name="title" className="p-2 rounded-md border-2 border-gray-500 outline-none" />
			</div>

			<div className="form_group flex flex-col gap-2">
				<label htmlFor="body" className="text-xl ">
					Deskripsi
				</label>
				<textarea
					name="body"
					id=""
					cols="30"
					rows="5"
					className="p-2 rounded-md border-2 border-gray-500 outline-none"
				></textarea>
			</div>

			<div className="form_group flex flex-col gap-2">
				<label
					htmlFor="image"
					className="text-xl border-2 h-[100px] border-red-500 bg-red-500/60  flex items-center justify-center relative rounded-md cursor-pointer "
				>
					<div className="flex gap-1 items-center ">
						<span className="text-md">
							<AiOutlinePlus />
						</span>
						<h1>Upload Image</h1>
					</div>
					<input type="file" id="image" name="image" className=" px-2 rounded-md absolute top-0 -z-10 outline-none  " />
				</label>
			</div>

			<button className="p-2 bg-red-500 rounded-md text-white">Upload</button>
		</form>
	)
}

export default FormUploadsBLogs
