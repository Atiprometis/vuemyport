<template>
    <div class=" fixed-top navbar-all " :style="navbarChange">
    
            <nav class=" container navbar navbar-expand-lg  ">
            <div class="container-fluid ">
                <!-- <a class="navbar-brand" href="#">LOGO</a> -->
                
                    <a class="navbar-brand" href="#"><slot name="logo-navbar"></slot></a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <slot name="nav-item">


                   <h1>{{ this.$store.state.targetRefB }}</h1>
                    <!-- <h1>{{ this.bgColor }}</h1> -->
                  </slot>
                </div>
            </div>
            </nav>
    
      
    </div>
    </template>
    
    <script>
    
    // import { eventBus } from 'path/to/eventBus.js'
    
    export default{
    
        name: 'NavBarTempate',
    
        data() {
        return {
          timer:null,
        };
      },
      props:{
        opacityValues: {
          type: Object,
          default: () => ({ opacityAbove: '0.9', opacityBelow: '1' }),
        },
        bgColor: {
        type: String,
        default: '#fff',
      },
      
      },
      computed: {
        navbarChange(){
          return {
            opacity: this.timer > 20?  this.opacityValues.opacityAbove : this.opacityValues.opacityBelow,
            backgroundColor: this.bgColor,
          };
        },
       
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
          // console.log('time2:'+this.timer);

          if(this.timer !== null){
            clearTimeout(this.timer);
    
          }

          this.timer = setTimeout(() => {
            this.timer = 0;
          }, 200);
    
        },
        // addscrollToElement() {
         
        //       document.getElementById('targetElementB').scrollIntoView({behavior: 'smooth'})
        // },
        // addscrollToExp() {
         
        //  document.getElementById('targetExp').scrollIntoView({behavior: 'smooth'})
        // },
        // addscrollTosocial() {
            
        //     document.getElementById('targetsocial').scrollIntoView({behavior: 'smooth'})
        // },

     }
    }  
    
    
    </script>
    <style>
    .navbar-all
    {
      /* background-color: #fff; */
    }
      .poiter{
        cursor: pointer;
      }
       
    </style>