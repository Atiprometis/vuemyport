<template>
    <div v-if="isPortfolioVisible" class=" col-lg-10 p-0 m-0 d-flex flex-column justify-content-center">
                    <h1>1</h1>
                    <button v-on:click="submitPortfolioEdit()">click 2 </button>
                    <div  >

<table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Type</th>
        <th scope="col">Project Description</th>
        <th scope="col">skills</th>
        <th scope="col">Role</th>
        <th scope="col">Challenges</th>
        <th scope="col">photo</th>
        <th scope="col">Link</th>
        <th scope="col">EDIT</th>
        <th scope="col">DELETE</th>
        </tr>
    </thead>
    <tbody v-for="item in userData " :key="item.id">
        <tr>
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.projectname }}</td>
        <td>{{ item.type }}</td>
        <td><a href="#" @click.prevent="getProjectDescription(item)">SEE MORE</a></td>
        <td><a href="#" @click.prevent="getSkills(item.id)" >SEE MORE</a></td>
        <td><a href="#" @click.prevent="getProjectRole(item)" >SEE MORE</a></td>
        <td><a href="#" @click.prevent="getProjectChallenges(item)" >SEE MORE</a></td>
        <td><font-awesome-icon :icon="photo" /></td>
        <td><font-awesome-icon :icon="['fas', 'link']" /></td>
        <td><font-awesome-icon :icon="['fas', 'pen-to-square']" v-on:click="submitPortfolioEdit(item.id)" class="color-cursor" /></td>
        <td><font-awesome-icon :icon="['fas', 'trash-can']" /></td>

        </tr>
        
        
    </tbody>
</table>


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
    </div>
    <div v-if="isHiddenPortfolioEdit">
                    <h1>2</h1>
                    <button v-on:click="submitPortfolio()">click 1 </button>
    </div>
    

    
</template>

<script>
 import axios from 'axios'

import CardAdmin from '../CardAdmin.vue'
import Swal from 'sweetalert2';

// import TemplatePortfolio from '../component/TemplatePortfolio'

export default {
  name: 'PortfolioAll',
  data() {
    return {
      imageUrlPortfolioUpload: null,
      userId:4,
      fileName: '',
      imageUrl: '',
      projectName: 'asdsad',
      projectType:'WEBSITE',
      projectDescription:'projectDDDDD',
      projectSkills:'Skills',
      projectRole:'Role',
      projectChallenges:'Challenges',
      userData:[],
      isHiddenPortfolio: true,
      isHiddenPortfolioEdit: false,
    };
  },
  components: {
    CardAdmin,
    
  },
  mounted(){
            this.getUserData();
            
        },
  methods:{
    toggleVisibility(section){
            this.isHiddenPortfolio = section === 'portfolio';
            this.isHiddenPortfolioEdit = section === 'portfolioedit';
            
        },
        submitPortfolio() {
            this.toggleVisibility('portfolio')
            
        },
        submitPortfolioEdit() {
            this.toggleVisibility('portfolioedit')

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
    async getUserData(){
        try{
            const response = await axios.get('http://localhost:3000/read');
            this.userData = response.data;
            console.log("userdata : "+this.userData);
        } catch (error) {
            console.error('Error user:', error);
        }
    },
    getProjectDescription(item) {

        Swal.fire({
          title: "Project Description",
          text: item.description,
        });
      
    },
    getProjectSkills(response) {
        if(response.data && response.data.length > 0){
            const skills = response.data.map(skill => skill.skill_name).join(', ');
            Swal.fire({
            title: "Project Skills",
            text: `Skills: ${skills}`, // แสดงชื่อทักษะทั้งหมด
        });
        }else {
        Swal.fire({
            title: "No Skills",
            text: "No skills found for this project.",
        });
    }
        
    },
    getProjectRole(item) {
        Swal.fire({
            title: "Project Role",
            text: item.pj_role,
        });
    },
    getProjectChallenges(item) {
        Swal.fire({
            title: "Project Challenges",
            text: item.pj_challenge,
        });
    },
    async getSkills(item){

        try{
            const response =  await axios.get(`http://localhost:3000/getskills/${item}`);
            // console.log("response: "+JSON.stringify(response))
            await this.getProjectSkills(response);
        } catch (error) {
            console.error('Error user:', error);
        }
    }

  },
  computed:{
    isPortfolioVisible(){
            return this.isHiddenPortfolio
        },
        isPPortfolioEditVisible(){
            return this.isHiddenPortfolioEdit
        }
  }
}
</script>
<style>
.color-cursor{
    cursor:pointer;
    color: aqua;;
}
</style>