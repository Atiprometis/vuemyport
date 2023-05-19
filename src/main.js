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
import { faFacebook,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faUserSecret,faFacebook,faLinkedin,faGithub,faEye)


createApp(App)

.use(router)
.use(bootstrap)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
