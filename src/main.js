import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'

import vuetify from './plugins/vuetify' // path to vuetify export


import 'bootstrap/dist/css/bootstrap.css'

import bootstrap from 'bootstrap/dist/js/bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import vuetify */



/* import specific icons */
import { faUserSecret,faEye,faChevronDown,faFile,faPenToSquare,faTrashCan,faLink,faUpload,faImage } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faLinkedin,faGithub,faHtml5,faCss3Alt,faJs,faVuejs,faPhp,faLaravel } from '@fortawesome/free-brands-svg-icons'
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import 'vue-multiselect/dist/vue-multiselect.min.css'; 


/* add icons to the library */
library.add(faUserSecret,faFacebook,faLinkedin,faGithub,faEye,faHtml5,faCss3Alt,faJs,faVuejs,faPhp,faLaravel,faChevronDown,faFile,faPenToSquare,faTrashCan,faLink,faUpload,faImage)




const app = createApp(App)

app.use(store)
app.use(router)
app.use(vuetify)
app.use(VueSweetalert2)
app.use(bootstrap)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')

