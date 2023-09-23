import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import AppNav from "@/components/AppNav.vue";
import SingleProduct from "@/pages/SingleProduct.vue";


const routes =[
    {
        path:'/',
        components:{
          default:  HomePage,
            nav:AppNav,
        },
    },

    {
        path:'/about',
        components:{
            default: AboutPage,
            nav:AppNav,
        }
    },
    {
        path:'/post/:id',
        components:{
            default: SingleProduct,
            nav:AppNav,
        },
        name: 'post',
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),

})

export default router