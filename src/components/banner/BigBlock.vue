<template>
    <div class="con d-flex justify-content-end ">
        <div class="img-b1 d-flex flex-column align-items-center justify-content-center">
               <h1 class="ab1">I am a Front-end</h1>
               <h2 class="ab2">Web Developer</h2>
               <p class="aboutmeskill">
                HTML,CSS,JACASCRIPT,มาม่า
               </p>
                <img class="b1" :src="require(`../../assets/img/b1.png`)" alt="">
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
.b1{
    z-index: 1;
    position: absolute;
    top: 0;
    right: -60%;
    width: 500px;
    height: 400px;
}
.ab1{

}
</style>