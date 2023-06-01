<template>
    <div class="home">
        <button
    style="font-size: 1em; cursor:pointer; background: red;"
    @click="addscrollToElement"
  >
    Scroll to Element with No Offset
  </button>

  <button
    style="font-size: 1em; cursor:pointer; background: green;"
    @click="scrollToTargetInB"
  >
    Scroll to Element
  </button>
    
  <h1>{{ this.$store.state.count }}</h1>

  <button @click="add">add</button>

  <button @click="add1">add scroll</button>
  <h1>{{ this.$store.state.targetRefB }}</h1>
       
        <NavBarview/>
        <BigBlock/>  

        <MyBackGround/>  
        <ProJects/>

        <ContactSocial/>

        <div id="targetElementB">Target Element</div>
        
        
    </div>

    
</template>

<script>

import NavBarview from '../components/navbar/NavBar.vue'
import BigBlock from '../components/banner/BigBlock.vue'
import MyBackGround from '../components/mybgandskill/MyBackGround.vue'

// import AboutTimeline from '../components/history/AboutTimeline.vue'
import ProJects from '../components/projectsall/ProJects'
import ContactSocial from '../components/social/ContactSocial.vue'

import { mapActions } from 'vuex';


export default {
  name: 'HomeView',
  components: {
    NavBarview,
    BigBlock,
    MyBackGround,
    // AboutTimeline,
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