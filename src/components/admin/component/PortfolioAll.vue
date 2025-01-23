<template>
    <div v-if="isPortfolioVisible" class=" col-lg-10 p-0 m-0 d-flex flex-column justify-content-center">
        <button v-on:click="submitPortfolioCreate()">Create Portfolio</button>
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
        <th scope="col">UPLOAD PHOTO</th>
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
        <td><font-awesome-icon v-on:click="showImagefrom(item.id)" 
            :icon="['fas', 'image']" 
            class="color-cursor text-info"
            /></td>
        <td><a :href="item.pj_link.startsWith('http') ? item.pj_link : 'https://' + item.pj_link " target="_blank"><font-awesome-icon :icon="['fas', 'link']" /></a></td>
        <td><font-awesome-icon :icon="['fas', 'pen-to-square']" v-on:click="submitPortfolioEdit(item)" class="color-cursor" /></td>
        <td><font-awesome-icon :icon="['fas', 'upload']" v-on:click="ShowUpload(item.id)"  class="color-cursor text-warning" /></td>
        <td><font-awesome-icon :icon="['fas', 'trash-can']" v-on:click="ShowDeletePortfolio(item.id)" class="color-cursor text-danger" /></td>
        </tr>
    </tbody>
</table>
        <!-- <CardAdmin>
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
                
            </template>
            
        </CardAdmin> -->

    </div>
    <div v-if="isHiddenPortfolioEdit" class=" col-lg-10 p-0 m-0 d-flex flex-column justify-content-center justify-content-center">
        <button v-on:click="submitPortfolio()">BACK</button>
        <PortfolioEdit :dataEdit="parentDataEdit" :onBacktoPort="submitPortfolio" :onGetdataUser="getUserData">
            
        </PortfolioEdit>
                    
    </div>
    <div v-if="isHiddenPortfolioCreate" class=" col-lg-10 p-0 m-0 d-flex flex-column justify-content-center justify-content-center">
        <button v-on:click="submitPortfolio()">BACK</button>
        <PortfolioCreate :onBacktoPort="submitPortfolio"  >
            
        </PortfolioCreate>
                    
    </div>
    

    
</template>

<script>
 import axios from 'axios'

// import CardAdmin from '../CardAdmin.vue'
import Swal from 'sweetalert2';
// import TemplatePortfolio from './TemplatePortfolio.vue'
import PortfolioEdit from '../PortfolioEdit.vue'
import PortfolioCreate from '../PortfolioCreate.vue'

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
      isHiddenPortfolioCreate: false,
      parentDataEdit: [],

    };
  },
  components: {
    // CardAdmin,
    PortfolioEdit,
    PortfolioCreate,
  },
  
  mounted(){
            this.getUserData();
            
        },
  methods:{
    toggleVisibility(section){
            this.isHiddenPortfolio = section === 'portfolio';
            this.isHiddenPortfolioEdit = section === 'portfolioedit';
            this.isHiddenPortfolioCreate = section === 'portfoliocreate';
        },
        submitPortfolio() {
            this.toggleVisibility('portfolio')
            
        },
        submitPortfolioEdit(Data) {
            
            this.parentDataEdit = Data;
            // console.log("data : "+JSON.stringify(this.parentDataEdit));
            this.toggleVisibility('portfolioedit')

        },
        submitPortfolioCreate() {
            // console.log("data : "+JSON.stringify(this.parentDataEdit));
            this.toggleVisibility('portfoliocreate')
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
    async Deleteportfolio(id){

            try{
                 await axios.delete(`http://localhost:3000/api/delete/portfolio/${id}`)
                await this.getUserData();
            } catch(error){
                return console.error('Error fetching quotes:', error);
            }
        },
    async ShowDeletePortfolio(id){
            // console.log('show id '+ idExp)
            Swal.fire({
                title: "คุณต้องการลบข้อมูลไหม?",
                text: "ถ้าคุณลบแล้วไม่สามารถย้อนกลับได้!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                    title: "ลบสำเร็จ!",
                    text: "ลบข้อมูลสำเร็จแล้ว",
                    icon: "success"
                    });
                    this.Deleteportfolio(id);

                }
                });
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
            const response = await axios.get('http://localhost:3000/api/readdata');
            this.userData = response.data;
            // console.log("userdata : "+this.userData);
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
            const response =  await axios.get(`http://localhost:3000/api/getskills/${item}`);
           
            await this.getProjectSkills(response);
        } catch (error) {
            console.error('Error user:', error);
        }
    },
     ShowUpload(itemID){
        Swal.fire({
            title: 'Upload File',
        html: `
            <div>
                    <h1>image อัพโหลด</h1>
                    <input type="file" id="fileInput"  class="form-control "  placeholder="เนื้อหา">
                </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Upload',
        didRender: () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.addEventListener('change', (event) => {
            console.log('File selected:', event.target.files[0]);
        });
        },
        preConfirm: () => {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];

            if (!file) {
            Swal.showValidationMessage('Please select a file to upload.');
            return false; // หยุดการดำเนินการหากไม่มีไฟล์
            }

            return file; // ส่งไฟล์ไปให้ Promise
        }
        }).then(async (result) => {
        if (result.isConfirmed) {
            const file = result.value;

            try {
        //    console.log('itemID: ' + itemID);
            // console.log('FILE: ' + file);
            await axios.post('http://localhost:3000/api/create-folder',{
                    userId: itemID,
                });
                const formData = new FormData();
                formData.append('images',file);
                formData.append('userId',itemID);
                const response = await axios.post('http://localhost:3000/api/upload-image-to-fodler', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (response.status !== 200) {
                throw new Error('Upload failed.');
                }
                console.log(response);
            Swal.fire('Success!', 'File uploaded successfully!', 'success');
            } catch (error) {
            Swal.fire('Error!', error.message, 'error');
            }
        }
        });
    },
    async showImagefrom(userId){
        // console.log('userId'+userId)
            try{
                const response = await axios.post(`http://localhost:3000/api/get-image-all/${userId}`);
                console.log(response.data.images);
                const images = response.data.images;
                const imageHtml = images
                .map(imageUrl => `<img src="${imageUrl}" alt="Image" style="width: 200px; height: 200px; margin: 5px;">`)
                .join('');

                Swal.fire({
               title: "Your Images",
                html: `<div style="display: flex; flex-wrap: wrap; justify-content: center;">${imageHtml}</div>`,
                showCloseButton: true
                });
            }catch(err){
                console.error('Error user:', err);
            }

    }

  },
  computed:{
    isPortfolioVisible(){
            return this.isHiddenPortfolio
        },
        isPortfolioEditVisible(){
            return this.isHiddenPortfolioEdit
        },
        isPortfolioCreateVisible(){
            return this.isHiddenPortfolioCreate
        }
  }
}
</script>
<style>
.color-cursor{
    cursor:pointer;
    color: aqua;;
}

/* สไตล์เมื่อมีรูป */
.has-image {
  color: red;
}

/* สไตล์เมื่อไม่มีรูป */
.no-image {
  color: black;
}

</style>