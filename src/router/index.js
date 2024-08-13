import Home from '@/view/HomeVue.vue'
import Aboutme from '@/view/AboutVue.vue'
import NavBar from '@/components/navbar/NavBar.vue'
import ResumePage from '@/view/ResumePage.vue'
import AdminPage from '../view/AdminPage.vue';

import { createRouter , createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'HomeVue', component: Home},
        {path: '/aboutme', name: 'AboutMe', component: Aboutme},
        {path: '/navber', name:'NavBar', component: NavBar},
        {path: '/resume', name: 'Resume',component: ResumePage},
        {path: '/sp-admin', name: 'Admin',component: AdminPage},
        
    ]
})

export default router