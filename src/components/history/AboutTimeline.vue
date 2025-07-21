<template>
    <div id="targetExp" class=""></div>
    <div class="timeline-container pt-5 pb-5">
        <div class="container">
            <div class="row">
                <h2 class=" head-text-about  text-uppercase text-start mt-2 text-light">EXPERIENCE</h2>
                
                <div class=" col-lg-12 d-flex flex-row ">
                    <div class="col-lg-6 col-sm-12 mt-3  d-flex justify-content-start flex-column text-start ">
                        <h1 class=" text-uppercase text-light"> experience</h1>
                        <div v-for="project in projects" :key="project.id_exp">
                            <div   class=" d-flex flex-row ">
                            <div class="timeline"></div>
                            <div class="dot m-1"></div>
                           
                            <div class=" d-flex flex-column text-start ">
                                <h3 class=" text-uppercase mt-1 text-light"> {{ project.projectname }} | {{ project.location }}</h3>
                                <!-- <p>-</p> -->
                                <p class="text-capitalize text-light">{{ project.content}}</p>
                            </div>
                            
                            </div>
                        </div>

                       
                        

                        <div class="dot m-1"></div>
                    </div>
                    <div class="col-lg-6  col-sm-12 mt-3 ps-5 d-flex justify-content-start flex-column text-start ">
                       
                        <h1 class=" text-uppercase text-light">education</h1>
                        
                        <div v-for="education in educations" :key="education.id_edu">
                            <div   class=" d-flex flex-row">
                            <div class="timeline"></div>
                            <div class="dot m-1"></div>
                           
                            <div class=" d-flex flex-column text-start ">
                                <h3 class=" text-uppercase mt-1 text-light"> {{ education.edu_name }}</h3>
                                <!-- <p class="m-0 p-0">{{ education.time}}</p> -->
                                <p class="m-0 pb-4 text-capitalize text-light">{{ education.edu_content}}</p>


                            </div>
                            
                            </div>
                        </div>
                        <div class="dot m-1 pb-5"></div>
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
                const response = await axios.get('http://localhost:3000/api/readexp')
               this.projects = response.data

            } catch(error){
                return console.error('Error fetching quotes:', error);
            }
        },
        async getEducation(){
            try{
                const response = await axios.get('http://localhost:3000/api/readeducation')
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
    background-color: #283747;

}
.head-text-about  {

text-decoration: underline;
text-decoration-color: #1095c1;
text-underline-offset: 8px;

}
.dot {
  padding-right: 7%;
  display: inline-flex;
  position: relative;
  alight-items: center;
  justify-content: center;

}
.dot::after {
    content: "";
    width: clamp(20px, 5vw, 30px);    
  height: clamp(20px, 5vw, 30px);
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    border: #FDBB59 solid 0.25em;     /* ใช้ em จะ scale กับ font */
    z-index: 2;
    left: 0;
   
}
.timeline {
   
  position: relative;


}
.timeline::after {
    content: "";
  height:100%;
  width: 7px;
  position: absolute;
  top:20px;
  left: 15px;
  background-color: #FDBB58;
}
</style>