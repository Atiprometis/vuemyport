<template>
    <div  class=" col-lg-12 p-0 m-0 d-flex justify-content-center">
        <div class="container">
            <div class="row">
                <div>
                    <form>
                <slot>
                    <div class="form-group ">
                        <label for="formGroupExampleInput" class=" text-uppercase">
                            name
                        </label>
                        <slot name="port-name">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                        </slot>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2" class=" text-uppercase">type</label>
                        <slot name="port-type">
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
                        </slot>
                    </div>
                    <div class="form-group ">
                        <label for="formGroupExampleInput" class=" text-uppercase">Project Description</label>
                        <slot name="port-pd">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                        </slot>
                    </div>
                    
                    <div class="form-group ">
                        <label for="formGroupExampleInput" class=" text-uppercase">Role</label>
                        <slot name="port-role">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                        </slot>
                        
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2" class=" text-uppercase">Challenges</label>
                        <slot name="port-challenge">
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
                        </slot>
                        
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2" class=" text-uppercase">Link</label>
                        <slot name="port-link">
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
                        </slot>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2" class=" text-uppercase">skills</label>
                        <slot name="port-skills">
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
                        </slot>
                        
                    </div>
                    
                </slot>
                    </form>
                </div>
                
                
            </div>
        </div>
                
    </div>
</template>
<script>
export default {
    name: 'TemplatePortfolio',
    data(){
        return {
            
           
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