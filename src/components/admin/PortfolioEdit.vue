<template>
    <div  class=" col-lg-10 p-0 m-0 d-flex justify-content-center">
        <div class="container">
            <div class="row">

                <form @submit.prevent="EditPortfolio()">
                <TemplatePortfolio>    
                        <template v-slot:port-name>
                        <input type="text" class="form-control" v-model="editName" id="formGroupExampleInput" :placeholder="dataEdit.projectname" >
                        </template>
                        <template v-slot:port-type>
                            <input type="text" class="form-control" v-model="editType" id="formGroupExampleInput2" :placeholder="dataEdit.type" >
                        </template>
                        <template v-slot:port-pd>
                            <input type="text" class="form-control" v-model="editPD" id="formGroupExampleInput" :placeholder="dataEdit.description" >
                        </template>
                        <template v-slot:port-role>
                            <input type="text" class="form-control" v-model="editRole" id="formGroupExampleInput" :placeholder="dataEdit.pj_role">
                        </template>
                        <template v-slot:port-skillcontent>
                            <input type="text" class="form-control" v-model="editSkillcontent" id="formGroupExampleInput2" :placeholder="dataEdit.skillcontent" >
                        </template>
                        <template v-slot:port-challenge>
                            <input type="text" class="form-control" v-model="editChallenge" id="formGroupExampleInput2" :placeholder="dataEdit.pj_challenge" >
                        </template>
                        <template v-slot:port-link>
                            <input type="text" class="form-control" v-model="editLink"  id="formGroupExampleInput2" :placeholder="dataEdit.pj_link" >
                        </template>
                        <template v-slot:port-skills>
                            <input type="text" class="form-control" id="formGroupExampleInput2" :placeholder="dataEdit.pj_skills" >
                        </template>
                        
                </TemplatePortfolio>
                        <button  type="submit" class="btn btn-primary">ยืนยัน</button>
                        <button type="submit" class="btn btn-danger">ยกเลิก</button>
                </form>
                
            </div>
        </div>
                
    </div>
</template>
<script>
import axios from 'axios'
import TemplatePortfolio from './component/TemplatePortfolio.vue'

export default {
    name: 'PortfolioEdit',
    components:{
        TemplatePortfolio,
    },
    data(){
        return {
            editName: this.dataEdit.projectname,
            editType:this.dataEdit.type,
            editPD:this.dataEdit.description,
            editRole:this.dataEdit.pj_role,
            editSkillcontent:this.dataEdit.skillcontent,
            editChallenge:this.dataEdit.pj_challenge,
            editLink:this.dataEdit.pj_link,
            id: this.dataEdit.id,
        }
    },
    props:{
    dataEdit:{
        type: Object,
        required: true
    },
    onBacktoPort:{
        type: Function,
        required: true
    },
    onGetdataUser:{
        type: Function,
        required: true
    }
  },
     methods:{
       async EditPortfolio(){
        try{
            await axios.patch('http://localhost:3000/api/edit/portfolio',{
            projectname: this.editName,
            type: this.editType,
            description: this.editPD,
            pj_role: this.editRole,
            skillcontent: this.editSkillcontent,
            pj_challenge: this.editChallenge,
            pj_link: this.editLink,
            id: this.id,
            })

            await this.backToPortfolio();
            await this.getDataUserPort();
        }catch(error){
            console.error('Error user:', error);
        }

        },
        backToPortfolio() {
            if(this.onBacktoPort){
                this.onBacktoPort();
            }
    },
    getDataUserPort(){
        if(this.onGetdataUser){
            this.onGetdataUser();
        }
    }
    },
    computed:{

       
    }
}

</script>

<style>
</style>