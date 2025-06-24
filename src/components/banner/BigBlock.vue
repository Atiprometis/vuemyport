<template>
    <div class="  ">
        <div class="row g-0 bigblock-bg">
            <!--  -->
            <div class=" col-lg-7 col-md-12 col-sm-12 img-b1 d-flex  justify-content-center align-items-center ">
                <swiper
                :spaceBetween=" 30"
                :autoplay="{
                delay: 10000,
                disableOnInteraction: false,
                }"
                :allowTouchMove = "false"

                :modules="modules"
                class="swiper pb-5"
            >
                <swiper-slide>

                    <div class="pre-2 m-0 p-0 ">
                    <label class="allab ">
                    <h1 class="ab1 ">Hello, My name is </h1>
                    <h2 class="ab2 m-2 px-2 text-uppercase">Chaithawat Samanjit</h2>
                    </label>
                    <div class="line"></div>
                    <p class="text_bigbox fadefontchange text-center p-3 m-0  d-flex justify-content-center align-items-center" >
                        {{myaboutme}}
                    </p>   
                    
                    </div>

                </swiper-slide>
                <swiper-slide>
                        <div class="pre-2 m-0 p-0 ">
                            <label class="allab ">
                            <h1 class="ab1">I am a Front-end </h1>
                            <h2 class="ab2 m-0 p-0 text-uppercase">Web developer</h2>
                            </label>
                            <div class="line"></div>
                            <p class="text_bigbox fadefontchange text-center p-3 m-0 d-flex justify-content-center align-items-center " >
                                {{ myskillbigblock }}
                            </p>   
                        </div>

                </swiper-slide>
                
                
                </swiper>
            </div>
            <div class="col-lg-5  d-none d-lg-block d-sm-none d-md-none m-0 p-0 bigblock ">
                
                <div class=" ">
                    <div class="circle rounded-circle"></div>
                <div class="circle-2 rounded-circle"></div>

                <img class="phone" :src="require(`../../assets/img/mockup/phone_14.png`)" alt="">
                <img class="phone-bg" :src="require(`../../assets/img/mockup/phone_14_bg.png`)" alt="">
                <img class="b1" :src="require(`../../assets/img/b1.png`)" alt="">
                <img class="b3" :src="require(`../../assets/img/b3.png`)" alt="">
                <img class="star" :src="require(`../../assets/img/star1.png`)" alt="">

                <img class="e-ro3" :src="require(`../../assets/img/e-ro3.png`)" alt="">
               
                <img class="nri" :src="require(`../../assets/img/nri.png`)" alt="">
                <!-- <img class="k1" :src="require(`../../assets/img/k1.png`)" alt=""> -->
                </div>
                
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
            myaboutme:"I am aspiring to become a web developer and am highly committed to continuously improving myself every day.",
            myskillbigblock: 'I have knowledge of HTML, CSS, JavaScript, and PHP. I use frameworks such as Vue.js, Laravel, CodeIgniter, and Express.js, and my database expertise is in MySQL. Additionally, I am skilled in design and use programs like Photoshop, Illustrator, and Figma. I am also eager to learn new skills in the future.',

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
.bigblock-bg{
    background: linear-gradient(to bottom right, #fff7d6, #ffddc1, #ffb3b3);

    width: 100%;
    height: 100vh;
}
.con{
    width: 100%;
}
.bigblock{


    width:100%;

    /* background: #fff; */
    position: relative;

}
.circle{
    display: block;
    z-index: 2;
    position: absolute;
    width: 60vh; 
    height: 60vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FCF4A3;
}
.circle-2{
    display: block;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vh; 
    height: 70vh;
    background-color: #B22222;
}
.phone{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vh;
    height: 75vh;
    z-index: 4;
}
.phone-bg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vh;
    height: 74vh;
    z-index: 1;
}
.b1{
    z-index: 4;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -30%);
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 45vh;

    width: 60vh;
    height: 50vh;
    animation-name: fate-top;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.e-ro3{
    z-index: 4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 40vh;
    /* right: -60%; */
    width: 50vh;
    height: 40vh;
     animation-name: move-right;
    animation-duration: 3s;
    animation-iteration-count: infinite;

}
.nri{
    z-index: 4;
    position: absolute;
    top: 40%;
    left: 68%;
    transform: translate(-135%, -50%);

    right: 34vh;
    width: 5vh;
    height: 5vh;

    /* animation-name: spin; */
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
   
}
/* .k1{
    z-index: 5;
    position: absolute;
    top: 39%;
    left: 56%;
    transform: translate(-135%, -50%);
    right: 34vh;
    width: 4vh;
    height: 2vh;

    animation-name: spin;

    animation-duration: 2.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
   
} */
.text_bigbox {
    font-size: 1rem;
}
.img-b1{

    height: 100vh;

    color: #a52a2a;;
}
.pre-1{
    display: none;
}
.swiper {
    width: 100%;
    height: 30vh; 
    box-sizing: border-box;
  }

.pre-2{

    animation-name: fadeIn;
     animation-duration: 10s;
    animation-iteration-count:infinite;
    width: 100%;
    height: 100%;
}
.ab1:hover ~ .line{
    background-color: #ca97ca;
    width: 28%;
}
.allab{
    text-align: start;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column; 
}

.line{

    height: 5px;
    width: 60%;
    margin: auto;
    /* transition: width 1s; */
    background-color: #f4c152;
    animation-name: line-animation;
    animation-duration: 9.5s;
    animation-iteration-count: infinite;
}
@keyframes line-animation {
               
                from {
                    width:0%;
                }
                to {
                    width:60%;
                }
            }  

.ab1{
    line-height: 20px;
    font-size: 1.8rem;
    transition: font-size 1s;
    font-weight:700;
    text-align: start;
}


.ab2{
    font-size: 2rem;
    transition: font-size 1s;
    font-weight:700;
}

.text_bigbox{
    font-size: 1.4rem;
    font-weight:400;

    text-align: start;
    margin: auto;
    opacity:1;
    padding: 3rem 0rem 3rem 4rem;
   
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