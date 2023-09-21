<template>
    <div class="  ">
        <div class="row g-0">
            <!--  -->
            <div class=" col-lg-6 img-b1 d-flex justify-content-center align-items-center ">
                <swiper
                :spaceBetween="30"

                
                :autoplay="{
                delay: 11000,
                disableOnInteraction: false,
                }"
                
                :modules="modules"
                class="mySwiper pb-5"
            >
                <swiper-slide>
                    <!-- <img class="" width="200" height="200" :src="require(`../../assets/img/project/jisoo2.jpeg`)" alt=""> -->
                    <div class="pre-2 m-0 p-0 ">
                    <label class="allab ">
                    <h1 class="ab1">My name is </h1>
                    <h2 class="ab2 m-0 p-0 text-uppercase">Chaithawat Samanjit</h2>
                    </label>
                    <div class="line"></div>
                    <p class="all2 fadefontchange  d-flex justify-content-start align-items-start" >
                        I am a front-end developer who is constantly seeking self-improvement. Currently, I am looking for opportunities in the field of programming, and I hope to be the one who gets that chance.
                    </p>   
                    </div>

                </swiper-slide>
                <swiper-slide>
                    <!-- <img class="" width="200" height="200" :src="require(`../../assets/img/project/jisoo1.jpg`)" alt=""> -->
                    <div class="pre-2 " >
                        <label class="allab ">
                        <h1 class="ab1">My project </h1>
                        <h2 class="ab2 m-0 p-0 text-uppercase">project</h2>
                        </label>
                        <div class="line"></div>
                        <p class="all2 fadefontchange  d-flex justify-content-start align-items-start" >
                            HTML
                        </p>   
                    </div>
                </swiper-slide>
                
                
                </swiper>
            </div>
            <div class="bigblock m-0 p-0 col-lg-6 d-flex justify-content-center align-items-center ">
                
                <div class="circle rounded-circle"></div>
                <div class="circle-2 rounded-circle"></div>

                <img class="phone" :src="require(`../../assets/img/mockup/phone_14.png`)" alt="">
                <img class="phone-bg" :src="require(`../../assets/img/mockup/phone_14_bg.png`)" alt="">
                <img class="b1" :src="require(`../../assets/img/b1.png`)" alt="">
                <img class="b3" :src="require(`../../assets/img/b3.png`)" alt="">
                <img class="star" :src="require(`../../assets/img/star1.png`)" alt="">

                <img class="e-ro3" :src="require(`../../assets/img/e-ro3.png`)" alt="">
               
                <img class="nri" :src="require(`../../assets/img/nri.png`)" alt="">
                <img class="k1" :src="require(`../../assets/img/k1.png`)" alt="">
                
        </div>
        
        </div>
                
        
    </div>
    
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default{

    name: 'BigBlock',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
    data(){
        return{
            boxpre1: true,
            boxpre2: true,
           

        }
    },

    mounted(){
        // window.addEventListener('scroll', this.fadefont);
        // window.addEventListener('load', this.fadefont2);
    },
    beforeUnmount() {
    // Remove the scroll event listener to prevent memory leaks
    window.removeEventListener('scroll', this.fadefont);

  },
    computed: {
    
    boxchange(){
      return {
        
        display: this.boxpre1 !== false ? 'block' : 'none',
      };
      
    }
  },
    methods: {

       
        fadefont(){

            if(this.boxpre1 !== false){
                setTimeout(() => {
                this.boxpre1 = false;
                console.log(this.boxpre1);
                // document.getElementsByClassName('pre-1');
            }, 2000);
            }else if(this.boxpre1 !== true){
                setTimeout(() => {
                this.boxpre1 = true;
                console.log(this.boxpre1);
                // document.getElementsByClassName('pre-1');
                }, 2000);
            }

           
      },
      
    },

    
}

</script>

<style>

.con{
    width: 100%;
}
.bigblock{


    width:100%;

    background: #ffffff;
    position: relative;

}
.img-b1{

    height: 100vh;
    background-color: #fff;
    color: #000;;
}
.pre-1{
    display: none;
}
.pre-2{
    display: block;
    animation-name: fadeIn;
     animation-duration: 11.4s;
    animation-iteration-count:infinite;
}
.phone{
    width: 40vh;
    height: 75vh;
    z-index: 5;
}
.phone-bg{
    position: absolute;
    width: 40vh;
    height: 74vh;
    z-index: 1;
}
.b1{
    z-index: 4;
    position: absolute;
    top: 40vh;

    width: 50vh;
    height: 40vh;
    /* animation-name: move;
    animation-duration: 3s;
    animation-iteration-count: infinite; */

}
.b3{
    z-index: 3;
    position: absolute;
    top: 40vh;

    width: 55vh;
    height: 35vh;

    animation-name: move-bg;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.star{
    z-index: 3;
    position: absolute;
    top: 45vh;

    width: 60vh;
    height: 50vh;
    animation-name: fate-top;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.circle{
    z-index: 2;
    position: absolute;
    width: 60vh; 
    height: 60vh;
    background-color: #FCF4A3;
}
.circle-2{
    z-index: 1;
    position: absolute;
    width: 70vh; 
    top: 14.5vh;
    height: 70vh;
    background-color: #B22222;
}




.e-ro3{
    z-index: 4;
    position: absolute;
    top: 40vh;
    /* right: -60%; */
    width: 50vh;
    height: 40vh;
     animation-name: move-right;
    animation-duration: 3s;
    animation-iteration-count: infinite;

}
.k1{
    z-index: 3;
    position: absolute;
    top: 48vh;
    right: 35vh;
    width: 3vh;
    height: 3vh;

    animation-name: spin;
    /* transform: rotate(270deg); */
    animation-duration: 2.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
   
}
.nri{
    z-index: 3;
    position: absolute;
    top: 47vh;
    right: 34vh;
    width: 5vh;
    height: 5vh;

    /* animation-name: spin; */
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
   
}

.ab1:hover ~ .line{
    background-color: #ca97ca;
    width: 28%;
}
.allab{
    text-align: start;
    
}

.line{

    height: 5px;
    width: 60%;
    margin: auto;
    /* transition: width 1s; */
    background-color: #f4c152;
    animation-name: line-animation;
    animation-duration: 11s;
    animation-iteration-count: infinite;
}
@keyframes line-animation {
                0% {
 
                    width:0%;
                }
                40% {
                    width:60%;
                }
                
                100% {
                    width:0%;
                }
            }  

.ab1{
    line-height: 20px;
    font-size: 2.3vw;
    transition: font-size 1s;
    font-weight:700;
    text-align: start;
}
.ab1:hover{
    /* font-size: 3rem; */
    
}
.ab2{
    font-size: 2.7vw;
    transition: font-size 1s;
    font-weight:700;
}
.ab2:hover{
    /* font-size: 2.5rem; */

}
.all2{
    font-size: 1.6vw;
    font-weight:400;
    width: 30vw;
    text-align: start;
    margin: auto;

     

    opacity:1;

}
@keyframes fadeIn
  {
    0% {
    opacity:0;
  }
  50% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
  }
/* .all2:hover{
    
    
    opacity: 0.6;
} */

.fadefontchange{
    
    /* opacity: 1; */
}
@keyframes move-bg {
                0% {
                    /* right: 0%; */
                    width: 55vh;
                }
                50% {
                    
                    width: 60vh;
                }
                
                100% {
                    /* right: 1%; */
                    width: 55vh;
                }
            }
@keyframes move-right {
                0% {
                    /* right: -60%; */
                    /* top: 0vh; */
                }
                50%{
                    /* right: -59.5%; */
                    top: 42vh;
                    /* top: -1%; */
                }
                
                100% {
                    /* right: -60%; */
                    /* top: 0vh; */
                }
            }            

@keyframes spin {
                from {
                    transform: rotate(270deg);
                }
                to {
                    transform: rotate(630deg);
                }
            }
@keyframes night {
                0% {
                    opacity: 1;
                }
                50%{
                    opacity: 0.4;
                }
                
                100% {
                    opacity: 1;
                }
                
            }
@keyframes sun {
                0% {
                    opacity: 0;
                }
                50%{
                    opacity: 1;
                }
                
                100% {
                    opacity: 0;
                }
            }
@keyframes fate-top {
                0% {
                    top: 40vh;

                    opacity: 0;
                }
                50% {
                    top: 45vh;

                    opacity: 1;
                }
                100% {
                    top: 40vh;

                    opacity: 0;
                }
            }

</style>