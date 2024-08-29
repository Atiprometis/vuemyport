<template>
    <NavBarTempate :opacityValues="customOpacityValues" bgColor="#transparent">
      <template v-slot:logo-navbar>

      </template>
      <template v-slot:nav-item>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase ">
                  <li class="nav-item ">
                        <router-link to="/" class="nav-link text-light">HOME</router-link>
                  </li>
                        
                        <li class="nav-item" >
                            <div class="nav-link poiter text-light " @click="addscrollToElement">project</div>
        
                        </li>
        
                        <li class="nav-item">
                          <div class="nav-link poiter text-light" @click="addscrollTosocial">social</div>
                        </li>
                        <li class="nav-item">
        
                          <router-link to="/resume" class="nav-link text-light">resume</router-link>
                  </li>
                </ul>
      </template>
    </NavBarTempate>
    
    </template>
    
    <script>
    import NavBarTempate from './NavBarTempate'
    
    export default{
        
        name: 'NavBarForProject',
        components:{
          NavBarTempate,
        },
    
        data() {
        return {
          currentTimer: null,
          customOpacityValues: {
          opacityAbove: '1',
          opacityBelow: '1',

        },
        };
      },
      computed: {
        
        // navbarChange1(){
        //   return {
        //     // backgroundColor: this.scrollY > 100? '#000' : '#fff',
        //     opacity: this.timer > 100?  '0.9' : '0',
        //   };
        // },
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
        
    
        // handleScroll() {
        //   console.log('time : ='+ this.currentTimer)
        //     // console.log(this.timer);
        //   // Update the scrollY data property with the current scroll position
    
        //   if(this.timer !== null){
        //     clearTimeout(this.timer);
    
        //   }
        //   this.timer = setTimeout(() => {
        //     this.timer = 0;
        //   }, 200);
    
        // },
       
    

     }
    } 
    
    
    </script>
    <style>
    
       
    </style>