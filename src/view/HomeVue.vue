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

  <button @click="addScroll">add scroll</button>

       
        <NavBarview/>
        <BigBlock/>  

        <MyBackGround/>  
        <ProJects/>
        <AboutTimeline/>
        <ContactSocial/>

        <div ref="targetElementB">Target Element</div>
        
        
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
    
    BigBlock,
    MyBackGround,
    AboutTimeline,
    ProJects,
    ContactSocial,
    NavBarview,
  },
  methods:{
   
    addscrollToElement() {
      
        this.$refs['targetElementB'].scrollIntoView({behavior: 'smooth'});
      
  },

  add(){
    this.$store.dispatch("addActionCount")
  },

 

  },
  mounted() {
    this.$store.watch(
      state => state.getTargetRefB,
      newRef => {
        if (newRef === 'targetElementB') {
          this.$refs.targetElementB.scrollIntoView({ behavior: 'smooth' });
        }
      }
    );
  }
}
</script>