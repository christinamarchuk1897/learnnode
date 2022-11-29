import state from '../user/state';
import mutations from '../user/mutations';
import actions from '../user/actions';
import getters from '../user/getters';
const user = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

export default user;