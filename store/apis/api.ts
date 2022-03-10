import axios from 'axios'

const baseUrl =
  process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com'

if (localStorage.getItem('auth_token')) {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    'auth_token'
  )}`
} else {
  axios.defaults.headers.common.Authorization = ''
}

export default axios.create({
  baseURL: baseUrl
})
