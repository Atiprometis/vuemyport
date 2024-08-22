<template>
    <div class="container">
        <div class="row">
            <div class=" col-lg-3 p-0 m-0 d-flex justify-content-center align-items-center flex-column">
                <h1>table list</h1>

                <button v-on:click="submitAboutme()" type="button" class="btn btn-primary bg-t text-uppercase">about me</button>
                <!-- <div v-show="!isHiddenAboutme">hide me</div> -->
                <button v-on:click="submitPortfolio()" type="button" class="btn btn-primary bg-t text-uppercase">portfolio </button>
                <button v-on:click="submitExp()" type="button" class="btn btn-primary bg-t text-uppercase">EXPERIENCE</button>
                <button v-on:click="submitEdu()" type="button" class="btn btn-primary bg-t text-uppercase">EDUCATION</button>
                <button v-on:click="submitContact()" type="button" class="btn btn-primary bg-t text-uppercase">CONTACT</button>
            

                
            </div>
            <div v-if="isHiddenAboutme" class=" col-lg-9 p-0 m-0">
                <div  class="bg-t-2"></div>
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

                        <!-- <button  type="button"  class="btn btn-primary">
                            <router-link to="/adminupdate" class="nav-link">update</router-link>
                        </button> -->

                    </template>
                    
                </CardAdmin>
            </div>
            <!-- portfolio -->
            <div v-if="isHiddenPortfolio"  class=" col-lg-9 p-0 m-0">
                <div  class="bg-t-2"></div>
                <CardAdmin>
                    <template v-slot:card-header>
                        <h1>พอร์ต</h1>
                    </template>
                    <template v-slot:card-content >
                        <h1>ดดด</h1>
                    </template>
                    <template v-slot:card-button >
                        
                        <button type="button" class="btn btn-primary">Primary</button>

                    </template>
                    
                </CardAdmin>
            </div>
            <!-- EXPERIENCE - EDUCATION -->
            <div v-if="isHiddenExp"  class=" col-lg-9 p-0 m-0">
                <div  class="bg-t-2"></div>
                <CardAdmin>
                    <template v-slot:card-header>
                        <h1>Exp</h1>
                    </template>
                    <template v-slot:card-content >

                        <table class="table table-striped table-dark" >
                            
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">edit</th>
                                <th scope="col">delete</th>
                                </tr>
                            </thead>
                            
                            <tbody v-for="item in showExp" :key="item.id_exp" >
                                
                                
                                <tr>
                               
                                <th scope="row">{{ item.id_exp }}</th>
   
                                <td>{{ item.projectname }}</td>
                                 <!-- <form v-on:submit="submitText" class="form-label"> -->
                                <td>
                                    {{ item.content }}
                                    <!-- <input type="text" class="form-control" :placeholder="item.content" :value="item.content" aria-label="{{ item.content }}" aria-describedby="basic-addon1"> -->
                                
                                </td>
                                <td>{{ item.location  }}</td>
                                <td>
                                    
                                    <button type="button" v-on:click="InputExp(item)" class="btn btn-primary">edit</button>
                                </td>
                                <td><button type="button" class="btn btn-danger">delete</button></td>
                                <!-- </form> -->
                                </tr>
                                
                            </tbody>
                        
                        </table>
                    </template>
                    <template v-slot:card-button >

                        <button type="button" class="btn btn-primary">Primary</button>

                    </template>
                    
                </CardAdmin>
            </div>
            <!-- edu  -->


            <div v-if="isHiddenEdu"  class=" col-lg-9 p-0 m-0">
                <div  class="bg-t-2"></div>
                <CardAdmin>
                    <template v-slot:card-header>
                        <h1>edu</h1>
                    </template>
                    <template v-slot:card-content >
                        <table class="table table-striped table-dark" >
                            
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>

                                <th scope="col">edit</th>
                                <th scope="col">delete</th>
                                </tr>
                            </thead>
                            
                            <tbody v-for="item in EducationsData" :key="item.id_edu" >
                                
                                
                                <tr>
                               
                                <th scope="row">{{ item.id_edu }}</th>
   
                                <td>{{ item.edu_name }}</td>
                                 <!-- <form v-on:submit="submitText" class="form-label"> -->
                                <td>
                                    {{ item.edu_content }}
                                    <!-- <input type="text" class="form-control" :placeholder="item.content" :value="item.content" aria-label="{{ item.content }}" aria-describedby="basic-addon1"> -->
                                
                                </td>
                                <td>
                                    
                                    <button type="button" v-on:click="inputEdu(item)" class="btn btn-primary">edit</button>
                                </td>
                                <td><button type="button" class="btn btn-danger">delete</button></td>
                                <!-- </form> -->
                                </tr>
                                
                            </tbody>
                        
                        </table>
                    </template>
                    <template v-slot:card-button >

                        <button type="button" class="btn btn-primary">Primary</button>

                    </template>
                    
                </CardAdmin>
            </div>


            <!-- CONTACT -->
            <div v-if="isHiddenContact"  class=" col-lg-9 p-0 m-0">
                <div  class="bg-t-2"></div>
                <CardAdmin>
                    <template v-slot:card-header>
                        <h1>contact</h1>
                    </template>
                    <template v-slot:card-content >
                        <h1>ดดด</h1>
                    </template>
                    <template v-slot:card-button >

                        <button type="button" class="btn btn-primary">Primary</button>

                    </template>
                    
                </CardAdmin>
            </div>
            
        

        </div>
    </div>
</template>

<script>

import CardAdmin from '../admin/CardAdmin.vue'
import axios from 'axios'
import Swal from 'sweetalert2';

export default {
    
    name: 'TableList',
    components: {
        CardAdmin,
    },
    
    data(){
        return {
            isHiddenAboutme: true,
            isHiddenPortfolio: false,
            isHiddenExp: false,
            isHiddenEdu: false,
            isHiddenContact: false,
            aboutmeData: [],
            aboutmeDataPost: [],
            id:2,
            content:'',
            showExp:[],
            EducationsData:[],
            UpdateExp:[],
            UpdateEdu:[],
            patchExpShow:[],
        }
    },
    methods: {
        async submitText(){
            // e.preventDefault() 
            console.log(this.id);
            console.log(this.content);

            try{

                const response = await axios.patch('http://localhost:3000/update/aboutme',{
                    id:2,
                    content:this.content,
                })

                this.aboutmeDataPost = response.data;

                console.log('returm = '+ this.aboutmeDataPost);
                
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        },
        submitAboutme() {
        this.isHiddenAboutme = true;
        this.isHiddenPortfolio = false;
        this.isHiddenExp = false;
        this.isHiddenEdu = false;
        this.isHiddenContact = false;
        
        },

        submitPortfolio() {
        this.isHiddenAboutme = false;
        this.isHiddenPortfolio = true;
        this.isHiddenExp = false;
        this.isHiddenEdu = false;
        this.isHiddenContact = false;

        },
        submitExp() {
        this.isHiddenAboutme = false;
        this.isHiddenPortfolio = false;
        this.isHiddenExp = true;
        this.isHiddenEdu = false;
        this.isHiddenContact = false;

        },
        submitEdu() {
        this.isHiddenAboutme = false;
        this.isHiddenPortfolio = false;
        this.isHiddenExp = false;
        this.isHiddenEdu = true;
        this.isHiddenContact = false;

        },
        submitContact() {
        this.isHiddenAboutme = false;
        this.isHiddenPortfolio = false;
        this.isHiddenExp = false;
        this.isHiddenEdu = false;
        this.isHiddenContact = true;

        },
        async getContentAboutme(){
            try{
                const response = await axios.get('http://localhost:3000/readaboutme')
                this.aboutmeData = response.data;
                
            } catch (error) {
                return  console.error('Error fetching quotes:', error);
            }
        },
        async getExp(){
            try{
                const response = await axios.get('http://localhost:3000/readexp')
                this.showExp = response.data;
                
            } catch (error) {
                return  console.error('Error fetching quotes:', error);
            }
        },
        async getEducation(){
            try{
                const response = await axios.get('http://localhost:3000/readeducation')
               this.EducationsData = response.data
            //    console.log('project = '+ this.projects)
            } catch(error){
                return console.error('Error fetching quotes:', error);
            }
        },
        
       async InputExp(idExp) {
            const projectname = idExp.projectname;
            const content = idExp.content;
            const location = idExp.location;

            // console.log('show ' + idExp.id_exp);
            // console.log('show2 ' + idExp.projectname);
            // console.log('show3 ' + idExp.content);
            // console.log('EXP SHOW '+ idExp);

            const  { value: formValues } = await Swal.fire({
        title: "Multiple inputs",
        html: `
               <h5>ชื่อโปรเจค</h5> 
            <input id="swal-input1" class="swal2-input" value="${projectname}">
             <h5>เนื้อหา</h5> 
            <input id="swal-input2" class="swal2-input" value="${content}">
             <h5>สถานที่</h5> 
            <input id="swal-input3" class="swal2-input" value="${location}">
        `,
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value
            ];
        }
        });
        if (formValues) {
        // Swal.fire(JSON.stringify(formValues));
        this.UpdateExp = {
            id_exp:  idExp.id_exp,
            projectname: formValues[0], 
            content: formValues[1], 
            location: formValues[2], 
        };
        // console.log(this.UpdateExp);
        this.patchExp(this.UpdateExp);

        }
    },
    async patchExp(updateData){
        
        console.log("Processing update with data:", updateData);

            try{

                 await axios.patch('http://localhost:3000/update/exp',updateData)


                console.log('returm = '+ this.patchExpShow);
                await this.getExp();
                // location.reload();
                
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        },
        async inputEdu(EduData) {

            const edu_name = EduData.edu_name;
            const edu_content = EduData.edu_content;

            // console.log('show ' + idExp.id_exp);
            // console.log('show2 ' + idExp.projectname);
            // console.log('show3 ' + idExp.content);
            console.log('EXP SHOW '+ EduData.id_edu);

            const  { value: formValues } = await Swal.fire({
        title: "Multiple inputs",
        html: `
               <h5>ชื่อโปรเจค</h5> 
            <input id="swal-input1" class="swal2-input" value="${edu_name}">
             <h5>เนื้อหา</h5> 
            <input id="swal-input2" class="swal2-input" value="${edu_content}">

        `,
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            ];
        }
        });
        if (formValues) {
        // Swal.fire(JSON.stringify(formValues));
        this.UpdateEdu = {
            id_edu:  EduData.id_edu,
            edu_name: formValues[0], 
            edu_content: formValues[1], 
        };
        // console.log(this.UpdateExp);
        this.patchEdu(this.UpdateEdu);

        }
    },
    async patchEdu(updateEduData){
        
        console.log("Processing update with data:", updateEduData);

            try{

                 await axios.patch('http://localhost:3000/update/edu',updateEduData)


                // console.log('returm = '+ this.patchExpShow);
                await this.getEducation();
                // location.reload();
                
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        },
    },
    mounted(){
        
    },
    beforeMount(){
        this.getContentAboutme()
        this.getExp()
        this.getEducation()
    }
}
</script>

<style>
    .bg-t{
        width: 100%;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        margin: 10px 0px 10px 0px;

    }
    .bg-t-2{
        width: 100%;

        background-color: rgb(56, 23, 225);
    }
    .all-box-select{
        width: 100%;
        height: 100%;
        background-color:rgb(236, 169, 77);
    }
    
    .edit-input{

            height: 100px;
            font-size: 16px;
            padding-top: 0; /* ไม่ใส่ padding ด้านบน */
            padding-bottom: 70px; /* เพิ่ม padding ด้านล่าง เพื่อเลื่อนข้อความขึ้นด้านบน */
            box-sizing: border-box; /* ให้ padding รวมอยู่ใน height */
            border: 1px solid #ccc; /* ใส่เส้นขอบ */
    }
    .aboutmeShow{
        border: solid 1px black;
        width:100%;
        display:block;
    }
</style>