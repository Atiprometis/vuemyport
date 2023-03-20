<template>

    <NavBarview/>

    <BigBlock/>  

    <MyBackGround/>  
    <ProJects/>
    <AboutTimeline/>
    <ContactSocial/>

 <!-- <router-view></router-view> -->
 
 



  
  

  


</template>

<script >

import NavBarview from './components/navbar/NavBar'
import BigBlock from './components/banner/BigBlock.vue'
import MyBackGround from './components/mybgandskill/MyBackGround.vue'

import AboutTimeline from './components/history/AboutTimeline.vue'
import ProJects from './components/projectsall/ProJects'
import ContactSocial from './components/social/ContactSocial.vue'


export default {
  name: 'App',
  components: {
    NavBarview,
    BigBlock,
    MyBackGround,
    AboutTimeline,
    ProJects,
    ContactSocial,
  }
}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
padding-top: 55px;
background-color: #2e6c65;
font-family: 'Kanit', sans-serif;


}

</style>
