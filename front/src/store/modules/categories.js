import state from '../categories/state';
import mutations from '../categories/mutations';
import actions from '../categories/actions';
import getters from '../categories/getters';
const categories = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

export default categories;