import Home from '@/view/HomeVue.vue'
import Aboutme from '@/view/AboutVue.vue'
import NavBar from '@/components/navbar/NavBar.vue'
import ResumePage from '@/view/ResumePage.vue'
import AdminPage from '../view/AdminPage.vue';
import AdminUpdate from '../components/admin/AdminUpdate.vue'
import ProjectDetail from '../components/projectsall/ProjectDetail.vue';
import TemplatePortfolio from '../components/admin/component/TemplatePortfolio.vue'
import TestWeb from '../components/test/TestWeb';

import { createRouter , createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'HomeVue', component: Home},
        {path: '/aboutme', name: 'AboutMe', component: Aboutme},
        {path: '/navber', name:'NavBar', component: NavBar},
        {path: '/resume', name: 'Resume',component: ResumePage},
        {path: '/sp-admin', name: 'Admin',component: AdminPage},
        {path: '/adminupdate', name:'Adminupdate',component: AdminUpdate},
        {path: '/projectdetail/:idproject', name:'projectdetail',component: ProjectDetail},
        {path: '/templatePortfolio', name:'templatePortfolio',component: TemplatePortfolio},

        {path: '/testforweb', name:'Testweb',component: TestWeb}

    ],
    scrollBehavior(to, from, savedPosition) {
       
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
      }
})

export default router