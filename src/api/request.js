import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.response.use(
  (response) => {
    // console.log(response)
    // 获取返回信息中的 data 属性
    const { data } = response
    if (data.code === 2000) {
      return data
    } else {
      // 错误提示
      ElMessage.error(data.message)
      return Promise.reject(new Error(data.message))
    }
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)

export default service
