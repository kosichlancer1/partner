import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
// import { fetchItem, fetchItems, fetchIdsByType, fetchUser } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        registrVisible: false,
        loginVisible: false,
        userAuth: false
    },
    mutations: {
        showRegistr: state => state.registrVisible = true,
        hideRegistr: state => state.registrVisible = false,
        showLogin: state => state.loginVisible = true,
        hideLogin: state => state.loginVisible = false,
        auth: state => {
            state.userAuth = true
            router.push('/office-main')
        } ,
        exit: state => {
            state.userAuth = false
            router.push('/')

        }
    }

});
export default store