import axios from 'axios'
import { Notification } from 'ant-design-vue'

const BaseURL = 'http://localhost:8888'

export const Service = axios.create({
	baseURL: BaseURL,
	timeout: 10000,
	method: 'get',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})

Service.interceptors.request.use(
	config => {
		//console.log(config)
		return config
	},
	err => {
		return Promise.reject(err)
	}
)

Service.interceptors.response.use(
	response => {
		return response.data
	},
	err => {
		const {
			response: { status, statusText }
		} = err
		debugger
		Notification['error']({
			// eslint-disable-next-line no-unused-vars
			message: h => (
				<div>
					request failed <span style="color:red">{status}</span>:
				</div>
			),
			description: statusText
		})
		return Promise.reject(err)
	}
)

//mount axios.all and axios.spread
Service.all = axios.all
Service.spread = axios.spread
