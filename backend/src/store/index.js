import { createStore } from "vuex";

import * as mutations from './mutations.js'

const store = createStore({
    state:{
        user:{
            token: sessionStorage.getItem('TOKEN'),
            date:{},
        }
    },
    getters:{},
    actions:{},
    mutations:{},
})

export default store;