import axios from "axios"
import router from "./../../router/index";
export default {
    async login({commit, getters}, formData) {
        const res = await axios.post('/login', formData);
        if (res.data.user && res.data.token) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            commit('setUser', res.data.user);
            router.push('/home');
        }
    }
}