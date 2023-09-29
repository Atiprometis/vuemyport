<template>
    <div class="bg-color-my-bg ">
        <div class="container">
            <div class="row ">
            
            <div class="col-lg-6  my-bg d-flex justify-content-center align-items-center ">

                <img class="phone-my-bg" :src="require(`../../assets/img/mockup/phone_14.png`)" alt="">
                <img class="myimg-my-bg " :src="require(`../../assets/img/mockup/t1.png`)" alt="">
                <img class="myimg-my-bg" :src="require(`../../assets/img/mockup/t2.png`)" alt="">
                <img class="mycode-my-bg" :src="require(`../../assets/img/mockup/t3.png`)" alt="">
                <!-- <img class="phone-my-bg z-2" :src="require(`../../assets/img/mockup/phone_14_bg_p.png`)" alt=""> -->
                <div class="all-boxskill">
                    <div class="boxskill   animete-on-scroll" ></div>
                    <div class="boxskill   animete-on-scroll"  ></div>
                </div>
            </div>
            <div class="col-lg-6 p-5 my-skills d-flex flex-column" >
                <h4 class="  text-start">About me</h4>
                <p class="p-0 m-0">
                    Motivated and skilled front-end developer with experience building responsive and user-friendly websites using Vue.js Proficient in HTML, CSS, and JavaScript, as well as experience with PHPframeworks such as Laravel and CodeIgniter. Strong attention to detail and ability to work well in a team environment.
                </p>
                <h4 class=" text-start">Skills</h4>
                <div class=" d-flex flex-column ">
                    <div class="text-start m-0 p-0">
                        <ul class="m-0 p-0 d-flex flex-row">
                            <li >
                                <h1 class=" p-2"><font-awesome-icon :icon="['fab', 'html5']" style="color: #ec4432;" /></h1>
                            </li>
                            <li >
                                <h1 class=" p-2"><font-awesome-icon :icon="['fab', 'css3-alt']" style="color: #3074e8;" /></h1>
                            </li>
                            <li >
                                <h1 class=" p-2"><font-awesome-icon :icon="['fab', 'js']" style="color: #e69941;" /></h1>
                            </li>
                            <li >
                                <h1 class=" p-2"><font-awesome-icon :icon="['fab', 'vuejs']" style="color: #5abf6b;" /></h1>
                            </li>
                            <li >
                                <h1 class=" p-2"><font-awesome-icon :icon="['fab', 'php']" style="color: #694cae;" /></h1>
                            </li>
                        </ul>
                    </div>
                    <div class="text-start ml-0 pl-0">
                    <ul class="m-0 pl-3 d-flex flex-row ">
                        <li c v-for=" skill in myskills2" :key="skill">
                            {{ skill }}
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>


<script >
export default{
    name: "MyBackGround",

    data(){
        return{
            
            mybg:"Motivated and skilled front-end developer with experience building responsive and user-friendly websites using Vue.js, React, and Angular.Proficient in HTML, CSS, and JavaScript, as well as experience with PHPframeworks such as Laravel and CodeIgniter. Strong attention to detail and ability to work well in a team environment.",

            myskills:["html5","CSS","JavaScript","Vue.js","PHP (Laravel, CodeIgniter)"],
            myskills2:["Photoshop","Illustrator"],
            }
    },
            mounted: function(){



                function getScrollAnimation() { 
                   
                    const animation_element = document.querySelectorAll('.animete-on-scroll');

                        const observer = new IntersectionObserver((entries)=>{
                            entries.forEach((entry)=>{
                                if(entry.isIntersecting){
                                    entry.target.classList.add('animete');
                                }else{
                                    entry.target.classList.remove('animete');
                                }
                            })
                            
                        },{
                            threshold:0.5
                        });

                        for (let i = 0; i < animation_element.length; i++) {
                            const el = animation_element[i];
                            observer.observe(el);
                        }
                }

                getScrollAnimation();

            },

   
}
</script>



<style>
.bg-color-my-bg{
    background-color: #fff;
}

    ul{
        list-style: none;
    }

    .my-skills{
        overflow-wrap: break-word;
    }
    .my-bg{
        width: 100%;
        height:100vh;
        position: relative;
    }
    .phone-my-bg{
    width: 40vh;
    height: 75vh;
    z-index: 5;
    position: absolute;
}
.phone-bg{
    position: absolute;
    width: 40vh;
    height: 74vh;
    z-index: 1;
}
.myimg-my-bg{
    width:40vh;
    height: 60vh;
    z-index: 4;
    position: absolute;
    margin-right: 10vh;
}
.mycode-my-bg{
    width: 60vh;
    height: 60vh;
    z-index: 4;
    position: absolute;
    margin-right: 10vh;
}
.animete-on-scroll{
    opacity: 0;
    transform: translateX(-300px);
    transition: all 1s ease-out;
    transition-delay: 0.2s;
}
/* .animete-on-scroll:hover{
    opacity: 1;
    transform: translateX(0px);
    transition: all 1s ease-out;
    transition-delay: 0.2s;
} */
.animete{
    opacity: 1;
    transform: translateX(0px);
    transition: all 0.6s ease-out;
    transition-delay: 0.4s;
}
.all-boxskill{
    display: flex;
    width: 100vw;
}
.boxskill{
    z-index: 1;
    position: absolute;
    top: 14.5vh;
    right: 13vh;
    background-color: #9148d3;
                    padding-right: 25vh;
                    margin-top: 6vh;
                    width: 70vh;
                    height: 35vh;
}
.boxskill:nth-child(1){
    z-index: 0;
    position: absolute;
    top: 14.5vh;
    left: 5vh;
    background-color: #f3e87b;
                    margin-right: 20vh;
                    margin-top: 30vh;
                    width: 70vh;
                    height: 35vh;
    transition-delay: 0.6s;
}

</style>