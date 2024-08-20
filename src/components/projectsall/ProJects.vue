<template>
    
    <div class="all-box-project">
        <div class="container ">
        <div class="row justify-content-start">
            <div id="targetElementB" class=""></div>
            <h1 id="position"></h1>
                <!-- <h2 class=" head-text-project mb-2  text-uppercase animete-top-down text-start mt-5 pt-2 ">projects</h2> -->
                <h2 class=" head-text-project mb-2  text-uppercase text-start mt-5 pt-2 ">portfolio</h2>

                <!-- <h1>{{ quotes }}</h1> -->
            <!-- <img src="../../assets/img/project/jisoo1.jpg" alt=""> -->
            
            
                <div class="col-lg-4  col-lg-auto col-sm-12 project-all " v-for="item in quotes " :key="item.id">
                    <router-link   class="nav-link" :to="{ name: 'projectdetail', params:{ idproject:item.id } }">  
                        <h1>{{ item.id }}</h1>
                    <!-- <img class="img-pj animete-top-down"  :src="getImgUrl(item.photo)" alt="" > -->
                    
                            <label class="col-12  project-box  ">

                                <img class="img-pj  " :src="getImgUrl(item.photo)" alt="" >
                                 
                                <div class="box-text d-flex flex-column justify-content-center align-items-center   ">
                                    <h3 class="text-main  ">{{ item.projectname }}</h3> 
                                    <h5 class="text-content m-0 p-0">{{ item.data }}</h5>
                                    <p class="text-type m-0 p-0 ">{{ item.type }}</p>
                                    
                                </div>
                                
                            </label>
                            
                    </router-link>
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
            // this.getProject();
         },
        mounted(){
            this.getProject();
            
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
    width: 100%;
    height: 100%;
   position: relative;
}
.project-box {
    display:block;
    width: 100%;
    height: 40vh;
    cursor: pointer;
    position: relative;
    top:0;
    left: 0;
    /* background-color: #060303; */
    margin-left: auto;
  margin-right: auto;
  margin-bottom: 4vh;

  filter: drop-shadow(6px 6px 6px #c9c9c9);

  
}
.img-pj{
    width: 100%;
    height: 40vh;
  
    object-fit: cover;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
   
}
.project-all:hover .img-pj{
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
}
.box-text{
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    transition: 0.6s;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 40vh;
    padding-top: 1.5vh;
    margin-bottom: 4vh;
    background: rgba(0,0,0,0.6);
    color: #fff;
    
}
.box-text:hover{
    opacity: 1;

}

 .box-text .text-main {

    
color: #fff;
}
.box-text .text-content {
    color: #fff;
}

.box-text .text-type {
    color: #fff;
}






/* .project-box:hover  + .box-text{
    display: block;

} */


.head-text-project  {

    text-decoration: underline;
    text-decoration-color: #1095c1;
    text-underline-offset: 8px;

}


.project-box .box-text .text-main  {

    background: linear-gradient(#FDBB59 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.08em);
  padding-bottom: 5px;
  
  transition: background-size .3s, background-position .3s .3s;
}







 



</style>