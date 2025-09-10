import LoginPage from "@/components/LoginPage.vue"
import ProductPage from "@/components/ProductPage.vue"
import TheHome from"@/components/TheHome.vue"
import { createRouter,createWebHistory } from "vue-router"

const routes = [
    {
        path:'/',
        name:'home',
        component:TheHome
    },
    {
        path:'/product',
        name:'product',
        component:ProductPage
    },
    {
        path:'/login',
        name:'Login',
        component:LoginPage
    },
]
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),routes
})
export default router