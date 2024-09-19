<template>
    <div  class=" col-lg-9 p-0 m-0">
                <div  class="bg-t-2"></div>
                <CardAdmin>
                    <template v-slot:card-header>
                        <h1>portfolio</h1>
                    </template>
                    <template v-slot:card-content >
                        <h1>ชื่อโปรเจค</h1>
                        <form v-on:submit="nameproject" class="form-label">
                            <input type="text" v-model="insertEduName" class="form-control " placeholder="โปรเจค">
                            <h1>image อัพโหลด</h1>
                            <input type="file"  class="form-control " @change="onFileUploadImages" placeholder="เนื้อหา">
                            
                       
                            <button  type="submit"  class="btn btn-primary">เพิ่ม</button>

                        </form>
                        <img v-if="imageUrlPortfolioUpload" :src="imageUrlPortfolioUpload" alt="Preview" style=" height: 100px;width: 100px;"/>
                        <h1>img : {{ imageUrlPortfolioUpload }}</h1>
                        <h1>type</h1>
                        <h1>อธิบายโปรเจค</h1>


                    </template>
                    <template v-slot:card-button >
                        
                        <button type="button" class="btn btn-primary">Primary</button>

                    </template>
                    
                </CardAdmin>
            </div>

    
</template>

<script>
import CardAdmin from '../CardAdmin.vue'

export default {
  name: 'PortfolioAll',
  data() {
    return {
      imageUrlPortfolioUpload: null,
    };
  },
  components: {
    CardAdmin,
    
  },
  methods:{
    onFileUploadImages(event){
        event.preventDefault();
        const file = event.target.files[0];

        if(file){
            const render = new FileReader();
            render.onload = (e) => {
                this.imageUrlPortfolioUpload = e.target.result;
            }
            render.readAsDataURL(file);
        }
    },

  
  }
}
</script>