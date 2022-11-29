export default {
    async fetch({commit}) {
        const res = await this.$axios.get('/categories');
        if (res.data.data.length) {
           await  commit('setCategories', res.data.data)
        }
    },
    async post({commit, getters}, formData) {
        const result = await this.$axios.post('/categories/create', formData);
    }
}