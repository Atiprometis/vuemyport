<template>

    <NavBarview/>

    <BigBlock/>  

 <!-- <router-view></router-view> -->
 
 



  
  

  


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBarview from './components/navbar/NavBar'
import BigBlock from './components/banner/BigBlock.vue'

export default {
  name: 'App',
  components: {
    NavBarview,
    BigBlock
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
}
</style>
