import Home from '@/view/HomeVue.vue'
import About from '@/view/AboutVue.vue'
import NavBar from '@/components/navbar/NavBar.vue'

import { createRouter , createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/navber', name:'NavBar', component: NavBar},
        
    ]
})

export default router