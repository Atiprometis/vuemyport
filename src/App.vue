<template>

    <NavBarview/>

    <BigBlock/>  
    
    <MyBackGround/>  
 <!-- <router-view></router-view> -->
 
 



  
  

  


</template>

<script >

import NavBarview from './components/navbar/NavBar'
import BigBlock from './components/banner/BigBlock.vue'
import MyBackGround from './components/mybgandskill/MyBackGround.vue'



export default {
  name: 'App',
  components: {
    NavBarview,
    BigBlock,
    MyBackGround,
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
