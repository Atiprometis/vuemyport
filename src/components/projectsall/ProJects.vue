<template>
    
    <div class="all-box-project">
        <div class="container ">
        <div class="row justify-content-start">
            <div id="targetElementB" class=""></div>
                <h2 class=" head-text-project  text-uppercase animete-top-down text-start mt-5 pt-2 ">projects</h2>
                <!-- <h1>{{ quotes }}</h1> -->
            <!-- <img src="../../assets/img/project/jisoo1.jpg" alt=""> -->

                <div class="col-lg-4  col-lg-auto col-sm-12 project-all  pt-5  offset-lg-1    " v-for="item in quotes " :key="item.id" >

                    <ul class="">
                        <li class="">
                            <label class="col-12  project-box  d-flex flex-column text-center  ">

                                <img class="img-pj  " :src="getImgUrl(item.photo)" alt="" >
                                <div class="box-text p-3 text-start d-inline-block overflow-hidden  ">
                                    <h3 class="text-main  ">{{ item.projectname }}</h3>
                                    <h5 class="text-content m-0 p-0">{{ item.data }}</h5>
                                    <p class="text-type m-0 p-0 ">{{ item.type }}</p>
                                    
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                
        </div>
        </div>
    </div>
</template>

<script >
// import { ref  } from 'vue';
import axios from 'axios';




    export default{
        data(){
        return{
        //    pic:"https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2020/06/08/4b0bdfc6-a639-11ea-8ea0-d7434be00753_image_hires_121748.jpg?itok=zq4iUnBF&v=1591589877",
        //     size:200,
        quotes: [],
        };
         },
         created(){
            this.getProject();
         },
        mounted(){
            // this.getProject();
        },
        methods: {
        getImgUrl: function (imagePath) {
        return require('@/assets/img/project/' + imagePath);
        },
        async getProject() {
            try {
                const response = await axios.get('http://localhost:3000/read');
                this.quotes = response.data;
                // console.log("ourput :" + response );
                // console.log("ourput2 :" + this.quotes );
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
            },

        },

        setup() {

            // const quote = ref('')
            // axios.get('http://localhost:3000/read')
            // .then(response => {
            //     quote.value = response
            // })

            // return {
            //     quote
            // }

            
            
        },
       
    
        name: 'ProJects',

        
        
    
    
        
    }
    

</script>

<style>
.all-box-project{
    width:100%;
    height: 100vh;
    background-color: #fff;
}
.project-all{
    /* opacity: 0; */
    /* display:none; */
    opacity: 1;
}
.project-box{

    width: 100%;
    height: 100%;

    

    position: relative;
    cursor: pointer;
}

.box-text{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    filter: drop-shadow(4px 6px 6px #dedede);


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

    background: linear-gradient(#FDBB59 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.08em);
  padding-bottom: 5px;
  
  transition: background-size .3s, background-position .3s .3s;
}
 .project-box:hover .box-text .text-main  {
  
  color: #1095c1;
  background-size: 100% .08em;

}

.project-box  .img-pj{
    width: 80%;
    height: 25vh;
    contain: 'sssd';
    margin-left: auto;
  margin-right: auto;
  margin-bottom: 4vh;
  padding-top: 1.5vh;
   /* padding-bottom: 2vh; */
   filter: drop-shadow(6px 6px 6px #c9c9c9);
   object-fit: cover;
   opacity: 1;
    transition: width .3s, height .3s,padding-bottom .3s,padding-top .3s,opacity .2s;  
    
}


.project-box:hover .img-pj{
    width: 80%;
    height: 25vh;
    padding-top: 0vh;
    padding-bottom: 1vh;
    opacity: 0.7;
}

.box-text .text-content {
    color: black;
}

.box-text .text-type {
    color: black;
}
</style>