import axios from 'axios'
import router from './router';

const api =  axios.create({
  baseURL: 'http://localhost:8000',
})
api.interceptors.request.use(
  request => {
    if (localStorage.getItem('token')) {

      request.headers['Authorization'] = localStorage.getItem('token');

      request.params = { has_access : JSON.parse(localStorage.getItem('user')).default_role === 'ADMIN' ? 1 : 0};
    } else {
      router.push('/login')
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);
export default api;