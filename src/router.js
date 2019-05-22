import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import NotFound from './views/404'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/user',
			//need a <router-view></router-view> tag
			//底层是都转换成render funcion
			component: () =>
				import(/* webpackChunkName: "layout" */ './layout/UserLayout'),
			children: [
				{
					path: '/user',
					redirect: '/user/login'
				},
				{
					path: '/user/login',
					name: 'login',
					component: () =>
						import(/* webpackChunkName: "user" */ './views/user/Login')
				},
				{
					path: '/user/register',
					name: 'register',
					component: () =>
						import(/* webpackChunkName: "user" */ './views/user/Register')
				}
			]
		},
		{
			path: '/',
			component: () =>
				import(/* webpackChunkName: "layout" */ './layout/BasicLayout'),
			children: [
				{
					path: '/',
					redirect: 'dashboard/analysis'
				},
				{
					path: '/dashboard',
					name: 'dashboard',
					component: { render: h => h('router-view') },
					children: [
						{
							path: '/dashboard/analysis',
							name: 'analysis',
							component: () =>
								import(/* webpackChunkName: "dashboard" */ './views/dashboard/Analysis')
						}
					]
				}
			]
		},
		{
			path: '/form',
			name: 'form',
			component: { render: h => h('router-view') },
			children: [
				{
					path: '/form/basic-form',
					name: 'basicform',
					component: () =>
						import(/* webpackChunkName: "form" */ './views/forms/BasicForm')
				},
				{
					path: '/form/step-form',
					name: 'stepform',
					component: () =>
						import(/* webpackChunkName: "form" */ './views/forms/StepForm'),
					children: [
						{
							path: '/form/step-form/info',
							name: 'info',
							component: () =>
								import(/* webpackChunkName: "form" */ './views/forms/StepForm/Step1')
						},
						{
							path: '/form/step-form/confirm',
							name: 'confirm',
							component: () =>
								import(/* webpackChunkName: "form" */ './views/forms/StepForm/Step2')
						},
						{
							path: '/form/step-form/result',
							name: 'result',
							component: () =>
								import(/* webpackChunkName: "form" */ './views/forms/StepForm/Step3')
						}
					]
				}
			]
		},
		{
			path: '*',
			name: '404',
			component: NotFound
		}
	]
})

//to、from、next
router.beforeEach((to, from, next) => {
	if (to.path !== from.path) {
		NProgress.start()
	}
	next()
})

router.afterEach(() => {
	NProgress.done()
})

export default router
