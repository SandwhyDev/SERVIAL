import React, { useState } from 'react'
import Navbar_Dashboard from '../../../components/Navbar_Dashboard'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import ax from '../../../libs/ax'

const index = ({ total_data, data, userData }) => {
	const { Column } = Table

	return (
		<div className="w-full h-screen flex ">
			<Navbar_Dashboard />
			<div className="main flex flex-col   w-full h-screen gap-4 p-8 ">
				<h1 className="text-4xl font-bold">{total_data} Total Data</h1>

				<Table dataSource={data} className="w-full h-screen rounded-lg ">
					<Column title="Username" dataIndex={'username'} key={'username'} />
					<Column title="Email" dataIndex={'email'} key={'email'} />
					<Column title="Password" dataIndex={'password'} key={'password'} />
					<Column title="Phone" dataIndex={'phone'} key={'phone'} />
					<Column title="Address" dataIndex={'address'} key={'address'} />
					<Column title="Jenis Kelamin" dataIndex={'jenis_kelamin'} key={'jenis_kelamin'} />
				</Table>
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const total_data = await ax.get('/user_read')
	const data = await ax.get('/user_read')

	return {
		props: {
			data: data.data.query,
			total_data: total_data.data.total_data,
		},
	}
}

export default index
