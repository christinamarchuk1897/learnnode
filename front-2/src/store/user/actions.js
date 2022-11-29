import axios from "axios"
import router from "./../../router/index";
export default {
    async login({commit, getters}, formData) {
        console.log(axios)
        // const res = await axios.post('/login', formData);
        await setTimeout(()=> {
            commit('setUser', {id: 1, name: 'MyName'})
        }, 1000)
        // if (res.data.user && res.data.token) {
        //     localStorage.setItem('token', res.data.token);
        //     localStorage.setItem('user', JSON.stringify(res.data.user));
        //     commit('setUser', res.data.user);
        //     router.push('/home');
        // }
    }
}