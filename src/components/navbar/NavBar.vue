<template>
<div class=" shadow-sm fixed-top bg-white">

        <nav class=" container navbar navbar-expand-lg  ">
        <div class="container-fluid ">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">

                <router-link to="/" class="nav-link">HOME</router-link>
                </li>
                
                <li class="nav-item" >
                    <div class="nav-link poiter" @click="addscrollToExp">EXPERIENCE</div>

                </li>

                <li class="nav-item" >
                    <div class="nav-link poiter" @click="addscrollToElement">project</div>

                </li>

                <li class="nav-item">
                  <div class="nav-link poiter" @click="addscrollTosocial">social</div>
                </li>

                
               <h1>{{ this.$store.state.targetRefB }}</h1>

               <div>

                <ComponentB :customFunction="myFunction" />
               </div>
            </ul>
            
            </div>
        </div>
        </nav>

  
</div>
</template>

<script>

// import { eventBus } from 'path/to/eventBus.js'
import { mapActions } from 'vuex';

export default{

  

    name: 'NavBarview',
    
    methods:{
       
      ...mapActions(['setTargetRefB']),
    scrollToTargetInB() {
      this.setTargetRefB('targetElementB');
    },

    addscrollToElement() {
     
          document.getElementById('targetElementB').scrollIntoView({behavior: 'smooth'})
    },
    addscrollToExp() {
     
     document.getElementById('targetExp').scrollIntoView({behavior: 'smooth'})
    },
    addscrollTosocial() {
        
        document.getElementById('targetsocial').scrollIntoView({behavior: 'smooth'})
    },
    // ['targetElementB'].scrollIntoView({behavior: 'smooth'})
 }
}  


</script>
<style>
  .poiter{
    cursor: pointer;
  }
</style>