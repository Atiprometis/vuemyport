<template>
<div class=" shadow-sm fixed-top navbar-all " :style="navbarChange">

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
                  <div class="nav-link poiter" >resume</div>
                </li>

                <li class="nav-item">
                  <div class="nav-link poiter" @click="addscrollTosocial">social</div>
                </li>

                
               <h1>{{ this.$store.state.targetRefB }}</h1>
               
               
            </ul>
            
            </div>
        </div>
        </nav>

  
</div>
</template>

<script>

// import { eventBus } from 'path/to/eventBus.js'


export default{

  

    name: 'NavBarview',

    data() {
    return {

      timer: null,
    };
  },
  computed: {
    
    navbarChange(){
      return {
        // backgroundColor: this.scrollY > 100? '#000' : '#fff',
        opacity: this.timer > 100?  '0.9' : '1',
      };
    }
  },
  
  mounted() {
    
    // Add a scroll event listener to track scroll position
    window.addEventListener('scroll', this.handleScroll);
    
    
  },
  beforeUnmount() {
    // Remove the scroll event listener to prevent memory leaks
    window.removeEventListener('scroll', this.handleScroll);

  },
    methods:{

      
       

    scrollToTargetInB() {
      this.setTargetRefB('targetElementB');


    },

    handleScroll() {
      // Update the scrollY data property with the current scroll position

      if(this.timer !== null){
        clearTimeout(this.timer);

      }
      this.timer = setTimeout(() => {
        this.timer = 0;
      }, 200);

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
.navbar-all
{
  background-color: #fff;
}
  .poiter{
    cursor: pointer;
  }
   
</style>