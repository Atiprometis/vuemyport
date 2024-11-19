<template>
    <div  class=" col-lg-10 p-0 m-0 d-flex justify-content-center">

                <CardAdmin>
                    <template v-slot:card-header>
                        <h1> Aboutme แก้ไข</h1>
                        
                    </template>
                    <template v-slot:card-content >
                        <h2 class="aboutmeShow" v-if="aboutmeData[0]">{{  aboutmeData[0].content }}</h2>

                        
                        <form v-on:submit="submitText" class="form-label">

                                <input type="text" v-model="content" class="form-control ">

                            <button  type="submit"  class="btn btn-primary">บันทึก</button>
                        </form>
                    </template>
                    <template v-slot:card-button >

                    </template>
                    
                </CardAdmin>
            </div>
</template>

<script>
import axios from 'axios'
    import CardAdmin from '../CardAdmin.vue'

export default{
    name:'AboutMeAll',
    components:{
        CardAdmin,
    },
    data(){
        return{
            id:2,
            content:'',
            aboutmeData: [],
            aboutmeDataPost: [],
        }
    },
    methods:{
        async submitText(){
            // e.preventDefault() 
            console.log(this.id);
            console.log(this.content);

            try{

                const response = await axios.patch('http://localhost:3000/api/update/aboutme',{
                    id:2,
                    content:this.content,
                })

                this.aboutmeDataPost = response.data;

                console.log('returm = '+ this.aboutmeDataPost);
                
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        },
        async getContentAboutme(){
            try{
                const response = await axios.get('http://localhost:3000/api/readaboutme')
                this.aboutmeData = response.data;
                
            } catch (error) {
                return  console.error('Error fetching quotes:', error);
            }
        },
    },
    beforeMount(){
        this.getContentAboutme()
    },
}
</script>

<style>
</style>