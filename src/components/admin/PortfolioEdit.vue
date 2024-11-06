<template>
    <div  class=" col-lg-10 p-0 m-0 d-flex justify-content-center">
        <div class="container">
            <div class="row">
                Data: {{ dataEdit }}
                <TemplatePortfolio>
                    <template v-slot:port-name>
                        <input type="text" class="form-control" id="formGroupExampleInput" :placeholder="dataEdit.projectname" :value="dataEdit.projectname">
                    </template>
                    <template v-slot:port-type>
                        <input type="text" class="form-control" id="formGroupExampleInput2" :placeholder="dataEdit.type" :value="dataEdit.type">
                    </template>
                    <template v-slot:port-pd>
                        <input type="text" class="form-control" id="formGroupExampleInput" :placeholder="dataEdit.description" :value="dataEdit.description">
                    </template>
                    <template v-slot:port-skills>
                        <input type="text" class="form-control" id="formGroupExampleInput2" :placeholder="dataEdit.pj_skills" :value="dataEdit.pj_skills">
                    </template>
                    <template v-slot:port-role>
                        <input type="text" class="form-control" id="formGroupExampleInput" :placeholder="dataEdit.pj_role" :value="dataEdit.pj_role">
                    </template>
                    <template v-slot:port-chanllege>
                        <input type="text" class="form-control" id="formGroupExampleInput2" :placeholder="dataEdit.pj_challenge" :value="dataEdit.pj_challenge">
                    </template>
                    <template v-slot:port-link>
                        <input type="text" class="form-control" id="formGroupExampleInput2" :placeholder="dataEdit.pj_link" :value="dataEdit.pj_link">
                    </template>

                </TemplatePortfolio>
                
            </div>
        </div>
                
    </div>
</template>
<script>
import TemplatePortfolio from './component/TemplatePortfolio.vue'

export default {
    name: 'PortfolioEdit',
    components:{
        TemplatePortfolio,
    },
    data(){
        return {

           
           
        }
    },
    props:{
    dataEdit:{
        type: Object,
        required: true
    }
  },
    methods:{
        
    },
    computed:{

       
    }
}

</script>

<style>
</style>