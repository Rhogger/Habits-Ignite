import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://192.168.211.241:3333',
})
