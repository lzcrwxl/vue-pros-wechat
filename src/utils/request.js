import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})


// request拦截器
service.interceptors.request.use(
  config => {

    if (store.getters.token) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token
    }
    return config
  }, error => {
    console.log(error)
    Promise.reject(error)
  })

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (!res.code) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })

      if (res.status === 401) {
        // store.dispatch('FedLogOut').then(() => {
          // location.reload()// 为了重新实例化vue-router对象 避免bug
        // })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
