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
                        <label for="formGroupExampleInput2" class=" text-uppercase">SkillConntent</label>
                        <slot name="port-skillcontent">
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
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

                            <!-- <div class=" h-100">
                            <multiselect 
                            v-model="value" 
                            tag-placeholder="Add this as new tag" 
                            placeholder="Search or add a tag" 
                            label="name"
                            track-by="code" 
                            :hide-selected="true"

                            :options="options" 
                            :multiple="true" 
                            :taggable="true" 
                            tag-position="bottom"
                            @tag="addTag">
                            
                            </multiselect>
                            <pre class="language-json"><code>{{ value }}</code></pre>
                            </div> -->
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
//   import 'vue-multiselect/dist/vue-multiselect.min.css'; 
   

export default {
    name: 'TemplatePortfolio',

    data(){
        return {
            value: [],
            search: "",
      options: [
        {name: 'Vue.js', code: 'vu'},
        {name: 'Javascript', code: 'js'},
        {name: 'Open Source', code: 'os'},
        {name: 'Vue.js1', code: 'vu1'},
        {name: 'Javascript1', code: 'js1'},
        {name: 'Open Source1', code: 'os1'},
        {name: 'Vue.js2', code: 'vu2'},
        {name: 'Javascript2', code: 'js2'},
        {name: 'Open Source2', code: 'os2'},
        {name: 'Vue.js3', code: 'vu3'},
        {name: 'Javascript3', code: 'js3'},
        {name: 'Open Source3', code: 'os3'},
      ]
           
        }
    },
    computed: {
    
  },
    methods:{
        addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    
    },
    
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