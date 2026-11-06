import { createStore } from "vuex";
import axios from 'axios'

import * as actions from './actions'
import * as mutations from './mutations'

const store = createStore({
    state:{
        user:{
            token: sessionStorage.getItem('TOKEN'),
            date:{},
        }
    },
    getters:{},
    actions,
    mutations,
})

export default store;