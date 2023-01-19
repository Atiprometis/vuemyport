<template>
    <div class="bg-color-my-bg ">
        <div class="container">
            <div class="row ">
            
            <div class="col-6 p-5 my-bg d-flex flex-column justify-content-start align-content-start text-start">
                <h4 class="  text-start">About me</h4>
            <p class="p-0 m-0">
                 Motivated and skilled front-end developer with experience building responsive and user-friendly websites using Vue.js Proficient in HTML, CSS, and JavaScript, as well as experience with PHPframeworks such as Laravel and CodeIgniter. Strong attention to detail and ability to work well in a team environment.
            </p>
            </div>
            <div class="col-6 p-5 my-skills d-flex flex-column" >
                <h4 class=" text-start">Skills</h4>
                <div class=" d-flex flex-row ">
                    <p class="text-start m-0 p-0">
                    <ul class="m-0 p-0 ">
                        <li c v-for=" skill in myskills" :key="skill">
                            {{ skill }}
                        </li>
                    </ul>
                    </p>
                    <p class="text-start ml-0 pl-0">
                    <ul class="m-0 pl-3 ">
                        <li c v-for=" skill in myskills2" :key="skill">
                            {{ skill }}
                        </li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style>
.bg-color-my-bg{
    background-color: aquamarine;
}

</style>

<script>
export default{
    name: "MyBackGround",

    data(){
        return{
            mybg:"Motivated and skilled front-end developer with experience building responsive and user-friendly websites using Vue.js, React, and Angular.Proficient in HTML, CSS, and JavaScript, as well as experience with PHPframeworks such as Laravel and CodeIgniter. Strong attention to detail and ability to work well in a team environment.",

            myskills:["HTML","CSS","JavaScript","Vue.js","PHP (Laravel, CodeIgniter)"],
            myskills2:["Photoshop","Illustrator"],
            }
    }
}
</script>

<style>
    ul{
        list-style: none;
    }

    .my-skills{
        overflow-wrap: break-word;
    }
</style>