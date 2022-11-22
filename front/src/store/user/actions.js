import axios from "axios"
export default {
    async login({commit}, formData) {
        const res = await axios.post('/login', formData);
        if (res.user && res.token) {
            localStorage.setItem('token', res.token);
            commit('setUser', res.user);
            this.$router.push('/home');
        }
    }
}