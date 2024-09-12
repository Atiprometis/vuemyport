<template>
    <NavBarTempate>
      <template v-slot:logo-navbar>
        LoGo
      </template>
      <template v-slot:nav-item>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase ">
                  <li class="nav-item">
                        <router-link to="/" class="nav-link">HOME</router-link>
                        </li>
                        <li class="nav-item">
                          <div class="nav-link poiter" @click="addscrollTosocial">social</div>
                        </li>
                        <li class="nav-item">
        
                          <router-link to="/resume" class="nav-link">resume</router-link>
                  </li>
                </ul>
      </template>
    </NavBarTempate>
    
    </template>
    
    <script>
    import NavBarTempate from './NavBarTempate'
    
    export default{
        
        name: 'NavBarResume',
        components:{
          NavBarTempate,
        },
    
        data() {
        return {
    
          timer: null,
        };
      },
      computed: {
        
        navbarChange(){
          return {
            
            opacity: this.timer > 100?  '0.9' : '1',
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
    
       
    </style>