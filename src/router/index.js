import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/views/login/login'
Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/views/login/login')), 'login')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    }
  ]
})
