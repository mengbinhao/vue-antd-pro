import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Notification } from 'ant-design-vue'
import findLast from 'lodash/findLast'
import NotFound from './views/404'
import Forbidden from './views/403'
import { check, isLogin } from './utils/auth'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/user',
			hideInMenu: true,
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
			meta: { authority: ['user', 'admin'] },
			component: () =>
				import(/* webpackChunkName: "layout" */ './layout/BasicLayout'),
			children: [
				{
					path: '/',
					redirect: '/dashboard/analysis'
				},
				{
					path: '/dashboard',
					name: 'dashboard',
					meta: { icon: 'dashboard', title: '仪表盘' },
					component: { render: h => h('router-view') },
					children: [
						{
							path: '/dashboard/analysis',
							name: 'analysis',
							meta: { title: '分析页' },
							component: () =>
								import(/* webpackChunkName: "dashboard" */ './views/dashboard/Analysis')
						}
					]
				},
				{
					path: '/form',
					name: 'form',
					//需要一个挂载点,底层是都转换成render funcion
					component: { render: h => h('router-view') },
					meta: { icon: 'form', title: '表单' },
					children: [
						{
							path: '/form/basic-form',
							name: 'basicform',
							meta: { title: '基础表单' },
							component: () =>
								import(/* webpackChunkName: "form" */ './views/forms/BasicForm')
						},
						{
							path: '/form/step-form',
							name: 'stepform',
							//display /form/step-form rather than /form/step-form/xxx
							hideChildrenInMenu: true,
							meta: { title: '分布表单', authority: ['admin'] },
							component: () =>
								import(/* webpackChunkName: "form" */ './views/forms/StepForm'),
							children: [
								{
									path: '/form/step-form',
									redirect: '/form/step-form/info'
								},
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
					path: '/test',
					name: 'test',
					component: { render: h => h('router-view') },
					meta: { icon: 'exclamation-circle', title: '测试' },
					children: [
						{
							path: '/test/testcomponent',
							name: 'testcomponent',
							meta: { title: '测试' },
							component: () =>
								import(/* webpackChunkName: "test" */ './views/test/TestComponent')
						},
						{
							path: '/test/renderfunction',
							name: 'renderfunction',
							meta: { title: 'renderfunction' },
							component: () =>
								import(/* webpackChunkName: "test" */ './views/test/RenderFunction')
						},
						{
							path: '/test/table',
							name: 'table',
							meta: { title: 'table' },
							component: () =>
								import(/* webpackChunkName: "test" */ './views/test/TableRender')
						},
						{
							path: '/test/dynamic-component',
							name: 'dynamic-component',
							meta: { title: 'dynamic-component' },
							component: () =>
								import(/* webpackChunkName: "test" */ './views/test/DynamicComponent')
						},
						{
							path: '/test/nexttick',
							name: 'nexttick',
							meta: { title: 'nexttick' },
							component: () =>
								import(/* webpackChunkName: "test" */ './views/test/Nexttick')
						},
						{
							path: '/test/v-model',
							name: 'v-model',
							meta: { title: 'v-model' },
							component: () =>
								import(/* webpackChunkName: "test" */ './views/test/DisplayCalculator')
						}
					]
				}
			]
		},
		{
			path: '/403',
			name: '403',
			hideInMenu: true,
			component: Forbidden
		},
		{
			path: '*',
			name: '404',
			hideInMenu: true,
			component: NotFound
		}
	]
})

router.beforeEach((to, from, next) => {
	if (to.path !== from.path) {
		NProgress.start()
	}
	//找到最近的配置权限的路由元数据
	const record = findLast(to.matched, record => record.meta.authority)
	if (record && !check(record.meta.authority)) {
		//in case dead loop
		if (!isLogin && to.path !== '/user/login') {
			next({
				path: '/user/login'
			})
			//in case dead loop
		} else if (to.path !== '403') {
			Notification['error']({
				message: '403 Forbidden',
				description: 'You dont have authority to access this page.'
			})
			next({
				path: '/403'
			})
		}
	}

	next()
})

router.afterEach(() => {
	NProgress.done()
})

export default router
