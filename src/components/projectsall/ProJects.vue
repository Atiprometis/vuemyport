<template>
    
    <div class="all-box-project">
        <div class="container ">
        <div class="row ">
            <div id="targetElementB" class=""></div>
                <h2 class=" head-text-project  text-uppercase text-start mt-5 pt-2 ">projects</h2>
                
                <div class="col-lg-4 col-sm-12   " v-for="item in 5" :key="item" >
                    
                            <label class="col-12 project-box d-flex flex-column text-center   ">

                                <img class="img-pj " :src=" pic "  >
                                <div class="box-text p-3 mb-3 text-start d-inline-block overflow-hidden  ">
                                    <h3 class="text-main  ">Web design pro ject{{ item }}</h3>
                                    <h5 class="text-content m-0 p-0">final projec  website for education</h5>
                                    <p class="text-type m-0 p-0 ">PHP / LARAVEL</p>
                                </div>
                            </label>


                </div>
                
        </div>
        </div>
    </div>
</template>

<script >
import { ref  } from 'vue'
import axios from 'axios';




    export default{

        setup() {

            const quote = ref('')
            axios.get('http://localhost:3000/read')
            .then(response => {
                quote.value = response
            })

            return {
                quote
            }
        },
       
    
        name: 'ProJects',

        data(){
        return{
           pic:"https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2020/06/08/4b0bdfc6-a639-11ea-8ea0-d7434be00753_image_hires_121748.jpg?itok=zq4iUnBF&v=1591589877",
            size:200,
        }
    }
    }
    

</script>

<style>
.all-box-project{
    width:100%;
    height: auto;
    background-color: #f0f0ff;
}
.project-box{

    width: 100%;
    height: 100%;
    
    position: relative;
    cursor: pointer;
}
.img-pj{
    /* width: 80%;
    padding-left: 2vh;
    padding-bottom: 3vh;
    height: 30vh; */
}
.box-text{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);

}

.head-text-project  {

    text-decoration: underline;
    text-decoration-color: #1095c1;
    text-underline-offset: 8px;

}
.box-text .text-main {

    color: black;
}

.project-box .box-text .text-main  {

    background: linear-gradient(#1095c1 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.08em);
  padding-bottom: 5px;
  
  transition: background-size .3s, background-position .3s .3s;
}
 .project-box:hover .box-text .text-main  {
  
  color: #1095c1;
  background-size: 100% .08em;

}
.project-box .img-pj{
    width: 90%;
    height: 80%;
    padding-left: 3vh;
    margin-top: 3vh;
    padding-top: 1vh;

    transition: padding-top .3s,padding-bottom .3s,
}
.project-box:hover .img-pj{
    padding-top:0vh;
    padding-bottom: 1vh;

}

.box-text .text-content {
    color: black;
}
.box-text .text-type {
    color: black;
}
</style>