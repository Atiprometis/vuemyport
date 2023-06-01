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

                <router-link to="/aboutme" class="nav-link" >aboutme</router-link>
                </li>

                <li class="nav-item">
                    <a href="" class="nav-link">contact</a>
                </li>
                <h1>{{ this.$store.state.count }}</h1>
                <button
    style="font-size: 1em; cursor:pointer; background: green;"
    @click="addscrollToElement"
  >
    Scroll to Element
  </button>
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
      // const el = this.$store.state.targetRefB
        // if(el == "targetElementB"){
          document.getElementById('targetElementB').scrollIntoView({behavior: 'smooth'})
        // }
      
    },
  
    // ['targetElementB'].scrollIntoView({behavior: 'smooth'})
 }
}  


</script>
<style>

</style>