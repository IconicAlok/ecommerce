
import { createRouter, createWebHistory,  } from "vue-router";
import Login from "../views/Login.vue"
import Dashboard from "../views/Dashboard.vue";
import Requestpassword from "../views/Requestpassword.vue";
import Resetpassword from "../views/Resetpassword.vue";
import Products from "../views/Products.vue";
import NotFound from "../views/NotFound.vue";
import AppLayout from "../components/AppLayout.vue";

import store from "../store/index.js";

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta:{
            requireAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard,
            },
            {
                path: 'products',
                name: 'app.products',
                component: Products,
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/request-password',
        name: 'requestpassword',
        component: Requestpassword
    },
    {
        path: '/reset-password/:token',
        name: 'resetpassword',
        component: Resetpassword,
        meta:{
            requiresGuist: true
        },
    },
    {
        path:"/:pathMatch(.*)",
        name: "notfound",
        component: NotFound,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes 
})
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth && !store.state.user.token){
        next({name:'login'});
    }else if(to.meta.requiresGuist && store.state.user.token){
        next({name:'dashboard'});
    }else{
        next();
    }
});
export default router;