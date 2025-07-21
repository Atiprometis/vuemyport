<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script >

export default {
  name: 'App',
  
  
}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

background-color: #fff;
font-family: 'Kanit', sans-serif;


}
.fade-enter-active, .fade-leave-active {
  transition: opacity 15s, transform 15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}

</style>
