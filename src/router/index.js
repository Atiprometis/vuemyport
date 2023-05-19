import Home from '@/view/HomeVue.vue'
import Aboutme from '@/view/AboutVue.vue'
import NavBar from '@/components/navbar/NavBar.vue'

import { createRouter , createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'HomeVue', component: Home},
        {path: '/aboutme', name: 'AboutMe', component: Aboutme},
        {path: '/navber', name:'NavBar', component: NavBar},
        
    ]
})

export default router