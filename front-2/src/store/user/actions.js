export default {
    async login({commit}, formData) {
        const res = await this.$axios.post('/login', formData);
        if (res.data.user && res.data.token) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            commit('setUser', res.data.user);
            this.$router.push('/home');
        }
    }
}