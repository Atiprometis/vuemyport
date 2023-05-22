<template>
    <div class="home">
        <button
    style="font-size: 1em; cursor:pointer; background: red;"
    @click="scrollToElement"
  >
    Scroll to Element with No Offset
  </button>
  
        <NavBarview/>

        <BigBlock/>  

        <MyBackGround/>  
        <ProJects/>
        <AboutTimeline/>
        <ContactSocial/>

        
        <div ref="targetElement">Target Element</div>
    </div>

    
</template>

<script>

import NavBarview from '../components/navbar/NavBar.vue'
import BigBlock from '../components/banner/BigBlock.vue'
import MyBackGround from '../components/mybgandskill/MyBackGround.vue'

import AboutTimeline from '../components/history/AboutTimeline.vue'
import ProJects from '../components/projectsall/ProJects'
import ContactSocial from '../components/social/ContactSocial.vue'

import { setTargetElementRef } from '@/js/scrollUtils.js'

export default {
  name: 'App',
  components: {
    NavBarview,
    BigBlock,
    MyBackGround,
    AboutTimeline,
    ProJects,
    ContactSocial,
  },
  methods:{
   
    scrollToElement() {
        const targetElementRef = this.$refs.targetElement;
    setTargetElementRef(targetElementRef);
  }
  }

}
</script>