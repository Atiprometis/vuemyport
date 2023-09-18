<template>
    <div class="home">       
        <NavBarview/>
        <BigBlock/>  

        <MyBackGround/>  
        <AboutTimeline/>
        <ProJects/>

        <ContactSocial/>

        
        
        
    </div>

    
</template>

<script>

import NavBarview from '../components/navbar/NavBar.vue'
import BigBlock from '../components/banner/BigBlock.vue'
import MyBackGround from '../components/mybgandskill/MyBackGround.vue'

import AboutTimeline from '../components/history/AboutTimeline.vue'
import ProJects from '../components/projectsall/ProJects'
import ContactSocial from '../components/social/ContactSocial.vue'




export default {
  name: 'HomeView',
  components: {
    NavBarview,
    BigBlock,
    MyBackGround,
    AboutTimeline,
    ProJects,
    ContactSocial,
    
  },
  methods:{

   


  
  }
}
</script>