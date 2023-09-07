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

import { mapActions } from 'vuex';


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
    ...mapActions(['addActionCount']),
    add1(){
      this.$store.dispatch("addActionCount")
    },

    // addscrollToElement() {
    //   const el = this.$store.state.targetRefB
    //     if(el == "targetElementB"){
    //       this.$refs['targetElementB'].scrollIntoView({behavior: 'smooth'})
    //     }
      
    // },

  
  }
}
</script>