import { createStore } from "vuex";

const store = createStore({
    state:{
        user:{
            token: null,
            date:{},
        }
    },
    getters:{},
    actions:{},
    mutations:{},
})

export default store;