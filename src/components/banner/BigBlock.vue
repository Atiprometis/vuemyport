<template>
    <div class="con d-flex justify-content-end ">
        <div class="img-b1 d-flex flex-column align-items-center justify-content-center">
               <h1 class="ab1">I am a Front-end</h1>
               <h2 class="ab2">Web Developer</h2>
               <p class="aboutmeskill">
                HTML,CSS,JACASCRIPT,มาม่า
               </p>
                <img class="b1" :src="require(`../../assets/img/b1.png`)" alt="">
                <img class="e-ro1" :src="require(`../../assets/img/e-ro2.png`)" alt="">
                <img class="star" :src="require(`../../assets/img/star1.png`)" alt="">
                <img class="nri" :src="require(`../../assets/img/nri.png`)" alt="">
                <img class="k1" :src="require(`../../assets/img/k1.png`)" alt="">
                <img class="b2" :src="require(`../../assets/img/b2.png`)" alt="">
                <img class="b3" :src="require(`../../assets/img/b3.png`)" alt="">

                
        </div>
        <div class="bigblock ">
            
        </div>
        
        
        
    </div>
</template>

<script>
export default{
    name: 'BigBlock'
}
</script>

<style>
.con{
    width: 100%;
}
.bigblock{

    position: relative;
    width:100%;
    height: 400px;
    background: #f4c152;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 59% 100%);

}
.img-b1{
    position: relative;
    width: 100%;
    height: 400px;
    background-color: #2e6c65;
    color: #fff;;
}
@keyframes move-bg {
                0% {
                    right: -60%;
                }
                50%{
                    right: -61%;
                    width: 530px;
                    /* top: -1%; */
                }
                
                100% {
                    right: -60%;
                    top: 0;
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
                    opacity: 0.4;
                }
                50%{
                    opacity: 1;
                }
                
                100% {
                    opacity: 0.4;
                }
            }
@keyframes fate-top {
                0% {
                    top: 8%;
                    right: -58%;
                    opacity: 0;
                }
                30% {
                    top: 4%;
                    right: -58%;
                    opacity: 1;
                }
                100% {
                    top: 8%;
                    right: -58%;
                    opacity: 0;
                }
            }
.b1{
    z-index: 2;
    position: absolute;
    top: 0;
    right: -60%;
    width: 500px;
    height: 400px;
    /* animation-name: move;
    animation-duration: 3s;
    animation-iteration-count: infinite; */

}
.star{
    z-index: 2;
    position: absolute;
    top: 4%;
    right: -58%;
    width: 500px;
    height: 400px;
    animation-name: fate-top;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.b2{
    z-index: 1;
    position: absolute;
    top: 0;
    right: -60%;
    width: 550px;
    height: 400px;
    animation-name: move-bg,night;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.b3{
    z-index: 1;
    position: absolute;
    top: 0;
    right: -60%;
    width: 550px;
    height: 400px;
    animation-name: move-bg,sun;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.e-ro1{
    z-index: 3;
    position: absolute;
    top: 40%;
    right: -10%;
    width: 20px;
    height: 20px;

    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
   
}

.k1{
    z-index: 3;
    position: absolute;
    top: 32.8%;
    right: -45.7%;
    width: 30px;
    height: 30px;

    animation-name: spin;
    /* transform: rotate(270deg); */
    animation-duration: 2.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
   
}
.nri{
    z-index: 3;
    position: absolute;
    top: 30%;
    right: -47%;
    width: 50px;
    height: 50px;

    /* animation-name: spin; */
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
   
}
</style>