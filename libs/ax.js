import axios from 'axios'

const ax = axios.create({
	baseURL: 'http://localhost:9000/api',
	responseType: 'json',
})

export default ax
