<template>
    <div class="bg-color-my-bg">
        <div class="row">
            <div class="col-6 my-bg">
            <p>
                {{ mybg }}
            </p>
            </div>
            <div class="col-6 my-skills">
                <p>
                    <ul >
                        <li v-for=" skill in myskills" :key="skill">
                            {{ skill }}
                        </li>
                    </ul>
                    
                </p>
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

            myskills:["HTML","CSS","JavaScript","Vue.js","React","Angular","PHP (Laravel, CodeIgniter)","Photoshop","Illustrator"],        }
    }
}
</script>