<template>
    <div  class=" col-lg-10 p-0 m-0 d-flex justify-content-center">
        <div class="container">
            <div class="row">
                <form @submit.prevent="createPortfolio()">
                    <TemplatePortfolio>
                        <template v-slot:port-name>
                        <input type="text" class="form-control" v-model="createName" id="formGroupExampleInput" >
                        </template>
                        <template v-slot:port-type>
                            <input type="text" class="form-control" v-model="createType" id="formGroupExampleInput2" >
                        </template>
                        <template v-slot:port-pd>
                            <input type="text" class="form-control" v-model="createPD" id="formGroupExampleInput" >
                        </template>
                       
                        <template v-slot:port-role>
                            <input type="text" class="form-control" v-model="createRole" id="formGroupExampleInput" >
                        </template>
                        <template v-slot:port-skillcontent>
                            <input type="text" class="form-control" v-model="createSkillcontent" id="formGroupExampleInput2"  >
                        </template>
                        <template v-slot:port-challenge>
                            <input type="text" class="form-control" v-model="createChallenge" id="formGroupExampleInput2" >
                        </template>
                        <template v-slot:port-link>
                            <input type="text" class="form-control" v-model="createLink" id="formGroupExampleInput2">
                        </template>
                        <template v-slot:port-skills>
                            <div class=" h-100">
                            <multiselect 
                            v-model="value" 
                            tag-placeholder="Add this as new tag" 
                            placeholder="Search or add a tag" 
                            label="skill_name"
                            track-by="id_skills" 
                            :hide-selected="true"
                            :options="options" 
                            :multiple="true" 
                            :taggable="false"
                            tag-position="bottom"
                            @tag="addTag">
                            </multiselect>
                            <!-- <pre class="language-json"><code>{{ value }}</code></pre> -->
                            </div>
                        </template>
                    </TemplatePortfolio>
                    <button type="submit" class="btn btn-primary">ยืนยัน</button>
                    <button type="button" v-on:click="backToPortfolio()" class="btn btn-danger">ยกเลิก</button>
                </form>
            </div>
        </div>
                
    </div>
</template>
<script>

import axios from 'axios'
import TemplatePortfolio from './component/TemplatePortfolio.vue'
import Multiselect from 'vue-multiselect'

    export default {
    name: 'PortfolioCreate',
    components:{
        TemplatePortfolio,
        Multiselect,
    },
    data(){
        return {
            createName:'',
            createType:'',
            createPD:'',
            createRole:'',
            createSkillcontent:'',
            createChallenge:'',
            createLink:'',
            imageUrlPortfolioUpload: null,
            userId:'',
            fileName: '',
            imageUrl: '',
            value: [],
            search: "",
            options: []
           
        }
    },
    props:{
            onBacktoPort: {
            type: Function, // ระบุว่าค่าที่ส่งมาควรเป็นฟังก์ชัน
            required: true,
            },
            
  },
    methods:{


        async  createPortfolio(){
            
            try{
                      const responseProject = await axios.post('http://localhost:3000/api/createportfolio',{

                        projectname: this.createName,
                        type: this.createType,
                        description: this.createPD,
                        pj_role: this.createRole,
                        skillcontent: this.createSkillcontent,
                        pj_challenge: this.createChallenge,
                        pj_link: this.createLink,
                        });

                const projectID = responseProject.data.insertId;
                console.log("pro:"+ projectID);

                const skillIDs = this.value.map(skill => skill.id_skills);

                for (const id_skill of skillIDs) {
                    await axios.post('http://localhost:3000/api/inputskills', {
                        id_user: projectID,
                        id_skills: id_skill, 
                    });
                }
                await this.backToPortfolio();
                 console.log('sss full');

            }catch(error){
                console.error('Error creating portfolio:', error.response?.data || error.message);
            }
        },
        addTag (newTag) {
        const tag = {
            skill_name: newTag,
            id_skills: Math.floor((Math.random() * 10000000))
        }
        this.options.push(tag)
        this.value.push(tag)
        },
        backToPortfolio() {
            if(this.onBacktoPort){
                this.onBacktoPort();
            }
        },   
        onFileUpImages(event){

        this.imageUrlPortfolioUpload = event.target.files[0];
        if (this.imageUrlPortfolioUpload) {
        this.fileName = this.imageUrlPortfolioUpload.name; // เก็บชื่อไฟล์

        const reader = new FileReader();

        reader.onload = (e) => {
        this.imageUrl = e.target.result; // เก็บ Data URL ใน imageUrl
        };
        reader.readAsDataURL(this.imageUrlPortfolioUpload);

        }
        },
        async createUserFolder(){
        
        try{
                await axios.post('http://localhost:3000/create-folder',{
                    userId: this.userId,
                });
                const formData = new FormData();
                formData.append('images',this.imageUrlPortfolioUpload);
                formData.append('userId',this.userId);
                const response = await axios.post('http://localhost:3000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
       
                console.log(response.data.message); // แสดงข้อความยืนยันการอัปโหลด
                
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }

    },
    
    async getSkillAll() {
        try{
            const response = await axios.get('http://localhost:3000/api/getskillall');
            this.options = response.data;
        } catch (err) {
            console.error('Error fetching quotes:', err);
        }
    },

   


    },
    computed:{
        
       
    },
    beforeMount(){
        this.getSkillAll();
    }
}

</script>

<style>
.multiselect__select {
  display: none !important;
}

.multiselect__input{

}
.multiselect__tags{
    min-height: 70px;
}
</style>