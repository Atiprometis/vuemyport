<template>
    <div id="targetExp" class=""></div>
    <div class="timeline-container pt-5 pb-5">
        <div class="container">
            <div class="row">
                <h2 class=" head-text-about  text-uppercase text-start mt-2">EXPERIENCE</h2>
                
                <div class=" col-lg-12 d-flex flex-row ">
                    <div class="col-lg-6 col-sm-12 mt-3 d-flex justify-content-start flex-column text-start ">
                        <h1 class=" text-uppercase"> experience</h1>
                        <div v-for="project in projects" :key="project.id">
                            <div   class=" d-flex flex-row">
                            <div class="timeline"></div>
                            <div class="dot m-1"></div>
                           
                            <div class=" d-flex flex-column text-start ">
                                <h3 class=" text-uppercase"> {{ project.name }}</h3>
                                <p>-</p>
                                <p class="text-capitalize">{{ project.contect}}</p>
                            </div>
                            
                            </div>
                        </div>
                        

                        <div class="dot m-1"></div>
                    </div>
                    <div class="col-lg-6 col-sm-12 mt-3 d-flex justify-content-start flex-column text-start ">
                       
                        <h1 class=" text-uppercase">education</h1>
                        
                        <div v-for="education in educations" :key="education.id">
                            <div   class=" d-flex flex-row">
                            <div class="timeline"></div>
                            <div class="dot m-1"></div>
                           
                            <div class=" d-flex flex-column text-start ">
                                <h3 class=" text-uppercase "> {{ education.name }}</h3>
                                <p class="m-0 p-0">{{ education.time}}</p>
                                <p class="m-0 pb-4 text-capitalize">{{ education.major}}</p>
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
    export default{
        name: 'AboutTimeline',

        data(){
        return{
           projects:[
            {id:0,name:"thesis project  | ilovetraining",contect:"this about website promote the course manage the course and make a resume using laravel and mysql"},
           {id:1,name:"internship | Appsynth company",contect:"I have interned at Appsynth cooperation for 3 months.I learned mobile application development via React Native with Firebase"}
        ],
        educations:[{id:0,name:"Silpakorn University",major:"Web and Interactive Media Design",time:"2013"},{id:0,name:"saohai wimolwitthayanukul school",major:"student",time:"2013"}],
        }
    }
    }
    

</script>

<style>
.timeline-container{
    width: 100%;
    height: 70vh;
    background-color: #fff;
}
.head-text-about  {

text-decoration: underline;
text-decoration-color: #1095c1;
text-underline-offset: 8px;

}
.dot {
  padding: 1px 4% 0 0%;

  display: inline-block;
  position: relative;

}
.dot::after {
    content: "";
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 50%;
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
  width: 5px;
  position: absolute;
  top:0;
    margin-left: 1.5vh;
    margin-top: 1vh;
  background-color: #FDBB58;

  display: inline-block;
}
</style>