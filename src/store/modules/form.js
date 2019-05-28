import router from '@/router'
import { submitStepForm } from '@/utils/request'

const state = {
	step: {
		payAccount: '',
		receiverAccount: {
			type: 'alipay',
			number: ''
		}
	}
}

const actions = {
	async submitStepForm({ commit }, { payload }) {
		await submitStepForm(payload)
		commit('saveStepFormData', payload)
		router.push('/form/step-form/result')
	}
}

const mutations = {
	saveStepFormData(state, { payload }) {
		state.step = {
			...state.step,
			...payload
		}
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}
