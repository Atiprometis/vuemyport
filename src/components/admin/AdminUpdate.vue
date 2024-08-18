<template>
    <div>
        
        <h1>ADMIN UPDATE</h1>
        <form v-on:submit="submitText">

                <input type="text" v-model="content" class=" edit-input">

                <button  type="submit"  class="btn btn-primary">
                    
                    update
                </button>
        </form>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'AdminUpdate',
    components: {
            
    },
    data(){
        return {
            aboutmeDataPost: [],
            id:2,
            content:'',
        }
    },
    methods:{
        async submitText(e){
            
            // console.log(this.id);
            // console.log(this.content);

            try{

                 await axios.patch('http://localhost:3000/update/aboutme',{
                    id:2,
                    content:this.content,
                    
                })
                // console.log('returm = '+ this.aboutmeDataPost);
              
                e.preventDefault() 
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
               

        },
    }
}
</script>

<style>

</style>