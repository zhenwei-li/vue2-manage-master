import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '@/api/getData'

Vue.use(Vuex)

const state = {
    userInfo: localStorage.getItem("userInfo") || {},
}

const mutations = {
    saveAdminInfo(state, data) {
        // data.date = new  Date().getTime();
        // data.time = 3600;
        localStorage.setItem('userInfo', JSON.stringify(data));
        state.userInfo = data;
    },
    deteleUserInfo(state) {
        localStorage.removeItem('userInfo');
        state.userInfo = {};
    }
}

const actions = {
    async setUserInfo({commit},data) {
        console.log("data>>>     "+ JSON.stringify(data))
        commit('saveAdminInfo', data);
    },
    async deteleUserInfo({commit}) {
        console.log("deteleUserInfo>>>     ")
        commit('deteleUserInfo');
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})
