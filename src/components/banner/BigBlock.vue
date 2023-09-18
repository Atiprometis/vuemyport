<template>
    <div class="  ">
        <div class="row g-0">
            <div class=" col-lg-6 img-b1 m-0 p-0 d-flex flex-column align-items-center justify-content-center  ">
                <!-- <label class="allab">
                    <h1 class="ab1">I am a Front-end</h1>
                    <h2 class="ab2 m-0 p-0 ">Web Developer</h2>
                </label> -->
                <label class="allab">
                    <h1 class="ab1">Hi my name is </h1>
                    <h2 class="ab2 m-0 p-0 text-uppercase">Chaithawat Samanjit</h2>
                </label>
               <div class="line"></div>
               <p class="all2">
                HTML,CSS,JACASCRIPT,มาม่า
               </p>     
            </div>
            <div class="bigblock m-0 p-0 col-lg-6 d-flex justify-content-center align-items-center ">
                <div class="circle rounded-circle"></div>
                <div class="circle-2 rounded-circle"></div>
                <img class="phone" :src="require(`../../assets/img/mockup/phone_14.png`)" alt="">
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
export default{
    name: 'BigBlock',

    methods: {
       
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
.phone{
    width: 40vh;
    height: 75vh;
    z-index: 5;
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
    right: 38vh;
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
    right: 37vh;
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
    cursor: pointer;
}
.allab:hover ~ .line{
    background-color: #f4c152;
    width: 28%;
}
.line{

    height: 5px;
    width: 0%;
    transition: width 1s;
    background-color: #f4c152;
}

.ab1{
    line-height: 20px;
    font-size: 3vw;
    transition: font-size 1s;
}
.ab1:hover{
    /* font-size: 3rem; */
    
}
.ab2{
    font-size: 3.5vw;
    transition: font-size 1s;
}
.ab2:hover{
    /* font-size: 2.5rem; */

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