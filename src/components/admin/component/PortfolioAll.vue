<template>
    <div  class=" col-lg-9 p-0 m-0 d-flex justify-content-center">

                <CardAdmin>
                    <template v-slot:card-header>
                        <h1>portfolio</h1>
                    </template>
                    <template v-slot:card-content >
                        <h1>ชื่อโปรเจค</h1>
                        <form v-on:submit="nameproject" class="form-label">
                            <input type="text" class="form-control " placeholder="โปรเจค">
                            

                            <button  type="submit"  class="btn btn-primary">เพิ่ม</button>

                        </form>
                        
                        
                        <h1>type</h1>
                        <h1>อธิบายโปรเจค</h1>


                    </template>
                    <template v-slot:card-button >
                        <div>
                            <h1>image อัพโหลด</h1>
                            <input type="file"  class="form-control " @change="onFileUpImages" placeholder="เนื้อหา">
                            <button type="button" class="btn btn-primary" v-on:click="createUserFolder()" >create folder</button>

                        </div>
                        <img v-if="fileName" :src="imageUrl" alt="Preview" style=" height: 100px;width: 100px;"/>
                        <!-- <h1 v-if="fileName">img : {{ fileName }}</h1> -->
                        <!-- <h2>img2:{{ imageUrl }}</h2> -->
                    </template>
                    
                </CardAdmin>
            </div>

    
</template>

<script>
 import axios from 'axios'

import CardAdmin from '../CardAdmin.vue'

export default {
  name: 'PortfolioAll',
  data() {
    return {
      imageUrlPortfolioUpload: null,
      userId:4,
      fileName: '',
      imageUrl: '',
    };
  },
  components: {
    CardAdmin,
    
  },
  methods:{
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
    // async uploadImage(userId){
       


    //     try{
    //         const response = await axios.post('http://localhost:3000/upload', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     });
    //     console.log('Image upload response:', response.data);

    //     }catch (error) {
    //         console.error('Error uploading image:', error.response ? error.response.data : error.message);
    //     }
    // }

  
  }
}
</script>