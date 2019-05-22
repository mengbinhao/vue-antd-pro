import Vue from 'vue'
import Router from 'vue-router'
import RenderRouterView from './components/RenderRouterView'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/user',
			//need a <router-view></router-view> tag
			//底层是都转换成render funcion
			component: RenderRouterView,
			children: [
				{
					path: '/user/login',
					name: 'login',
					// route level code-splitting
					// this generates a separate chunk (about.[hash].js) for this route
					// which is lazy-loaded when the route is visited.
					component: () =>
						import(/* webpackChunkName: "user" */ './views/user/Login')
				},
				{
					path: '/user/register',
					name: 'register',
					// route level code-splitting
					// this generates a separate chunk (about.[hash].js) for this route
					// which is lazy-loaded when the route is visited.
					component: () =>
						import(/* webpackChunkName: "user" */ './views/user/Register')
				}
			]
		},
		{
			path: '*',
			component: () => import(/* webpackChunkName: "user" */ './views/404.vue')
		}
	]
})
