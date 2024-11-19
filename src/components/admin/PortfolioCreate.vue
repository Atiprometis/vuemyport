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
                        <template v-slot:port-challenge>
                            <input type="text" class="form-control" v-model="createChallenge" id="formGroupExampleInput2" >
                        </template>
                        <template v-slot:port-link>
                            <input type="text" class="form-control" v-model="createLink" id="formGroupExampleInput2">
                        </template>
                    </TemplatePortfolio>
                    <button type="submit" class="btn btn-primary">ยืนยัน</button>
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
    name: 'PortfolioCreate',
    components:{
        TemplatePortfolio,
    },
    data(){
        return {
            createName:'',
            createType:'',
            createPD:'',
            createRole:'',
            createChallenge:'',
            createLink:'',
           
           
        }
    },
    methods:{
        async  createPortfolio(){
            
            try{
                const response = await axios.post('http://localhost:3000/api/createportfolio',{

                    projectname: this.createName,
                    type: this.createType,
                    description: this.createPD,
                    pj_role: this.createRole,
                    pj_challenge: this.createChallenge,
                    pj_link: this.createLink,
                })
                console.log(response)
            }catch(error){
                console.error('Error user:', error);
            }
        }
    },
    computed:{

       
    }
}

</script>

<style>
</style>