import axios from "axios"
import router from "./../../router/index";
export default {
    async fetch({commit, getters}, formData) {
        //const res = await axios.post('/login', formData);

    },
    async post({commit, getters}, formData) {
        const result = await axios.post('/categories/create', formData);
    }
}