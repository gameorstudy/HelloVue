import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/Login'
import Main from '@/interfaces/Main'
import Login from '@/interfaces/Login'
import Sign_up from '@/interfaces/Sign-up'
import Protocol from '@/interfaces/Protocol'
import ShoppingCart from '@/interfaces/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
			name: 'Main',
			component: Main,
			meta: {title: 'vivo智能手机官方商城'}
    },
		{
			path: '/login',
			name: 'Login',
			component: Login,
			meta: {title: '登录'}
		},
		{
			path: '/sign-up',
			name: 'Sign-up',
			component: Sign_up,
			meta: {title: '账号注册'}
		},
		{
			path: '/protocol',
			name: 'Protocol',
			component: Protocol,
			meta: {title: 'vivo帐号用户服务协议'}
		},
		{
			path: '/shoppingCart',
			name: 'ShoppingCart',
			component: ShoppingCart,
			meta: {title: 'vivo智能手机官方商城'}
		}
  ]
})
