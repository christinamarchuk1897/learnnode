import axios from "axios"
import router from "./../../router/index";
export default {
    async fetch({commit, getters}) {
        const res = await axios.get('/categories');
    },
    async post({commit, getters}, formData) {
        const result = await axios.post('/categories/create', formData);
    }
}