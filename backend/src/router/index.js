
import { createRouter, createWebHistory,  } from "vue-router";
import Login from "../views/Login.vue"
import Dashboard from "../views/Dashboard.vue";
import Requestpassword from "../views/Requestpassword.vue";
import Resetpassword from "../views/Resetpassword.vue";


const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
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
        path: '/reset-password/token',
        name: 'resetpassword',
        component: Resetpassword
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router;