<template>
    <div class="con d-flex justify-content-end ">
        <div class="img-b1 d-flex flex-column align-items-center justify-content-center">
                <label class="allab">
                    <h1 class="ab1">I am a Front-end</h1>
                    <h2 class="ab2 m-0 p-0 ">Web Developer</h2>
                </label>
               <div class="line"></div>
               <p class="all2">
                HTML,CSS,JACASCRIPT,มาม่า
               </p>
                <img class="b1" :src="require(`../../assets/img/b1.png`)" alt="">
                <img class="e-ro2" :src="require(`../../assets/img/e-ro2.png`)" alt="">
                <img class="e-ro3" :src="require(`../../assets/img/e-ro3.png`)" alt="">
                <img class="star" :src="require(`../../assets/img/star1.png`)" alt="">
                <img class="nri" :src="require(`../../assets/img/nri.png`)" alt="">
                <img class="k1" :src="require(`../../assets/img/k1.png`)" alt="">

                <img class="b3" :src="require(`../../assets/img/b3.png`)" alt="">

                
        </div>
        <div class="bigblock ">
           
        </div>
        
        
        
    </div>
</template>

<script>
export default{
    name: 'BigBlock',

    methods: {
        hoverFontsize(){

        }
    },

    
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

.b1{
    z-index: 4;
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
    z-index: 3;
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
    z-index: 2;
    position: absolute;
    top: 0;
    right: -60%;
    width: 550px;
    height: 400px;
    animation-name: move-bg,sun;
    
    animation-duration: 4.5s;
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

    animation-name: move-bg;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.e-ro2{
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
.e-ro3{
    z-index: 4;
    position: absolute;
    top: 0;
    right: -60%;
    width: 500px;
    height: 400px;
     animation-name: move-right;
    animation-duration: 3s;
    animation-iteration-count: infinite;

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
    font-size: 2.5rem;
    transition: font-size 1s;
}
.ab1:hover{
    font-size: 3rem;
    
}
.ab2{
    font-size: 2rem;
    transition: font-size 1s;
}
.ab2:hover{
    font-size: 2.5rem;

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
@keyframes move-right {
                0% {
                    right: -60%;
                }
                50%{
                    right: -59.5%;
                    top: 5px;
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

</style>