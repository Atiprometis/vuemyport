import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faEye } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faLinkedin,faGithub,faHtml5,faCss3Alt,faJs,faVuejs,faPhp,faLaravel } from '@fortawesome/free-brands-svg-icons'
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';




/* add icons to the library */
library.add(faUserSecret,faFacebook,faLinkedin,faGithub,faEye,faHtml5,faCss3Alt,faJs,faVuejs,faPhp,faLaravel)


createApp(App).use(store)

.use(router)
.use(bootstrap)
.use(VueSweetalert2)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
