import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/views/login/login')), 'Login')
const Course = r => require.ensure([], () => r(require('@/views/course/course')), 'Course')
const Job = r => require.ensure([], () => r(require('@/views/job/job')), 'Job')
const School = r => require.ensure([], () => r(require('@/views/school/school')), 'School')
const Mine = r => require.ensure([], () => r(require('@/views/mine/mine')), 'Mine')
const MineInfoDetail = r => require.ensure([], () => r(require('@/views/mine/detail')), 'MineInfoDetail')
const MinePeixun = r => require.ensure([], () => r(require('@/views/mine/peixun')), 'MinePeixun')
const MineZhengshu = r => require.ensure([], () => r(require('@/views/mine/zhengshu')), 'MineZhengshu')
const message = r => require.ensure([], () => r(require('@/views/mine/message')), 'message')
const hongbao = r => require.ensure([], () => r(require('@/views/mine/hongbao')), 'hongbao')

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: '/course'
  },
  {
    path: '*',
    redirect: '/course'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/course',
    name: 'Course',
    meta: {
      acturl: require('@/assets/imgs/icon-course-fill.png')
    },
    component: Course
  },
  {
    path: '/job',
    name: 'Job',
    meta: {
      acturl: require('@/assets/imgs/icon-job-fill.png')
    },
    component: Job
  },
  {
    path: '/school',
    name: 'School',
    meta: {
      acturl: require('@/assets/imgs/icon-school-fill.png')
    },
    component: School
  },
  {
    path: '/mine',
    name: 'Mine',
    meta: {
      acturl: require('@/assets/imgs/icon-mine-fill.png')
    },
    component: Mine
  },
  {
    path: '/mineinfodetail',
    name: 'MineInfoDetail',
    component: MineInfoDetail
  },
  {
    path: '/minepeixun',
    name: 'MinePeixun',
    component: MinePeixun
  },
  {
    path: '/minezhengshu',
    name: 'MineZhengshu',
    component: MineZhengshu
  },
  {
    path: '/message',
    name: 'message',
    component: message
  },
  {
    path: '/hongbao',
    name: 'hongbao',
    component: hongbao
  }
  ]
})
