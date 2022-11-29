import axios from "axios"
import router from "./../../router/index";
export default {
    async fetch({commit}) {
        const res = await axios.get('/categories');
        console.log('act')
        if (res.data.data.length) {
           await  commit('setCategories', res.data.data)
        }
    },
    async post({commit, getters}, formData) {
        const result = await axios.post('/categories/create', formData);
    }
}