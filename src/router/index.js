import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/views/login/login'
import my from '@/views/my/my'
Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/views/login/login')), 'Login')
const Course = r => require.ensure([], () => r(require('@/views/course/course')), 'Course')
const Job = r => require.ensure([], () => r(require('@/views/job/job')), 'Job')
const School = r => require.ensure([], () => r(require('@/views/school/school')), 'School')
const Mine = r => require.ensure([], () => r(require('@/views/mine/mine')), 'Mine')

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
      component: Login
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
  ]
})
