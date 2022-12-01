import Home from '@/view/HomeVue.vue'
import About from '@/view/AboutVue.vue'

import { createRouter , createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'Home', component: Home},
        {path: '/about', name: 'About', component: About}
        
    ]
})

export default router