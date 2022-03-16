import axios from 'axios'
import Router from 'next/router'

import React, { useState } from 'react'

const index = () => {
	const handleLogin = (e) => {
		e.preventDefault()
		const { username, password } = e.target

		axios
			.post('https://sandy_api.jvalleyserver.net/api/admin_login', {
				username: username.value,
				password: password.value,
			})
			.then((response) => {
				if (response.status == 200) {
					sessionStorage.setItem('token', response.data.token)
					Router.push('/cms')
				}
			})
			.catch((err) => {
				console.error(err)
			})
	}

	const [showDeveloper, setShowDeveloper] = useState(false)

	const showModalDeveloper = () => {
		setShowDeveloper(!showDeveloper)
		setForgotPassword(false)
	}

	const [forgotPassword, setForgotPassword] = useState(false)

	const handleForgotPassword = () => {
		setForgotPassword(!forgotPassword)
		setShowDeveloper(false)
	}

	return (
		<div className="w-screen h-screen flex ">
			<div className="right w-[50%] h-screen bg-gray-200  flex flex-col ">
				<form className="w-full h-full flex flex-col gap-4 items-center justify-center p-28  " onSubmit={handleLogin}>
					<h1 className="text-xl">LOGIN ADMIN</h1>
					<div className="form_group flex flex-col gap-2 w-full ">
						<label htmlFor="username" className="uppercase">
							username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							className="border-[.5px] border-gray-500 p-2 outline-none rounded-md"
							placeholder="Username"
						/>
					</div>

					<div className="form_group flex flex-col gap-2 w-full ">
						<label htmlFor="password" className="uppercase">
							password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="border-[.5px] border-gray-500 p-2 outline-none rounded-md"
							placeholder="Password"
						/>
					</div>

					<div className="w-full flex items-end justify-between">
						<div className="flex gap-2 items-center">
							<input type="checkbox" name="remember" id="remember" />
							<label htmlFor="remember">Login untuk 30 hari</label>
						</div>
						<div className="cursor-pointer" onClick={handleForgotPassword}>
							<h1 className="font-bold">Forgot Password ?</h1>
						</div>
					</div>

					<button
						className="w-full h-12 flex items-center justify-center border-[.5px] border-red-500 bg-white uppercase rounded-lg "
						type="submit"
					>
						<h1>Login</h1>
					</button>

					<div
						className="w-full h-12 flex items-center justify-center border-[.5px] cursor-pointer border-white text-white bg-red-500 uppercase rounded-lg "
						onClick={showModalDeveloper}
					>
						<h1>DAFTAR</h1>
					</div>

					{forgotPassword && (
						<div className="w-full text-red-500 " onClick={showModalDeveloper}>
							<h1>Harap hubungi developer untuk lupa password</h1>
						</div>
					)}

					{showDeveloper && (
						<div className="w-full text-red-500 " onClick={showModalDeveloper}>
							<h1>Harap hubungi developer untuk menjadi admin</h1>
						</div>
					)}
				</form>
			</div>

			{/* LEFT  */}
			<div className="left bg-gray-200  w-[50%] h-screen flex flex-col justify-center items-center">
				<img
					src="https://pngimg.com/uploads/cat/cat_PNG50545.png"
					alt=""
					className="w-[550px] h-[450px] object-cover"
				/>
			</div>
		</div>
	)
}

export default index
