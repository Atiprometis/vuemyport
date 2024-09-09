<template>
    <div id="targetExp" class=""></div>
    <div class="timeline-container pt-5 pb-5">
        <div class="container">
            <div class="row">
                <h2 class=" head-text-about  text-uppercase text-start mt-2">EXPERIENCE</h2>
                
                <div class=" col-lg-12 d-flex flex-column ">
                    <div class="col-lg-6 col-sm-12 mt-3  d-flex justify-content-start flex-column text-start ">
                        <h1 class=" text-uppercase"> experience</h1>
                        <div v-for="project in projects" :key="project.id_exp">
                            <div   class=" d-flex flex-row ">
                            <div class="timeline"></div>
                            <div class="dot m-1"></div>
                           
                            <div class=" d-flex flex-column text-start ">
                                <h3 class=" text-uppercase mt-1"> {{ project.projectname }} | {{ project.location }}</h3>
                                <!-- <p>-</p> -->
                                <p class="text-capitalize">{{ project.content}}</p>
                            </div>
                            
                            </div>
                        </div>

                       
                        

                        <div class="dot m-1"></div>
                    </div>
                    <div class="col-lg-6 col-sm-12 mt-5 d-flex justify-content-start flex-column text-start ">
                       
                        <h1 class=" text-uppercase">education</h1>
                        
                        <div v-for="education in educations" :key="education.id_edu">
                            <div   class=" d-flex flex-row">
                            <div class="timeline"></div>
                            <div class="dot m-1"></div>
                           
                            <div class=" d-flex flex-column text-start ">
                                <h3 class=" text-uppercase mt-1"> {{ education.edu_name }}</h3>
                                <!-- <p class="m-0 p-0">{{ education.time}}</p> -->
                                <p class="m-0 pb-4 text-capitalize">{{ education.edu_content}}</p>


                            </div>
                            
                            </div>
                        </div>
                        <div class="dot m-1"></div>
                    </div>
                    

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default{
        name: 'AboutTimeline',

        data(){
        return{
           projects:[
        //     {id:0,name:"thesis project  | ilovetraining",contect:"this about website promote the course manage the course and make a resume using laravel and mysql"},
        //    {id:1,name:"internship | Appsynth company",contect:"I have interned at Appsynth cooperation for 3 months.I learned mobile application development via React Native with Firebase"}
        ],
        educations:[
            
        ],
        }
    },
    methods:{
        async getExp(){
            try{
                const response = await axios.get('http://localhost:3000/readexp')
               this.projects = response.data

            } catch(error){
                return console.error('Error fetching quotes:', error);
            }
        },
        async getEducation(){
            try{
                const response = await axios.get('http://localhost:3000/readeducation')
               this.educations = response.data

            } catch(error){
                return console.error('Error fetching quotes:', error);
            }
        }
    },
    beforeMount(){
        this.getExp();
        this.getEducation();
    }
    }
    

</script>

<style>
.timeline-container{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.head-text-about  {

text-decoration: underline;
text-decoration-color: #1095c1;
text-underline-offset: 8px;

}
.dot {
  padding: 0 7% 0 0%;

  display: inline-block;
  position: relative;

}
.dot::after {
    content: "";
    height: 30px;
    width: 30px;
    background-color: #fff;
    border-radius: 50%;
    left: 0;
    display: inline-block;
    position: absolute;
    border: #FDBB59 solid 4px;
    z-index: 2;
}
.timeline {
   
  position: relative;

 
  /* background-color: rgb(206, 39, 39); */


}
.timeline::after {
    content: "";
  height:100%;
  width: 7px;
  position: absolute;
  top:0;
  left: 0;
    margin-left: 2vh;
    margin-top: 1vh;

  background-color: #FDBB58;

  display: inline-block;
}
</style>