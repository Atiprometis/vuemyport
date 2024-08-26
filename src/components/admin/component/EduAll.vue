<template>

    <div  class=" col-lg-9 p-0 m-0">
                <div  class="bg-t-2"></div>
                <CardAdmin>
                    <template v-slot:card-header>
                        <h1>edu</h1>
                    </template>
                    <template v-slot:card-content >
                        <table class="table table-striped table-dark table-all" >
                            
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
                                <td><button type="button" v-on:click="ShowDeleteEdu(item.id_edu)" class="btn btn-danger">delete</button></td>
                                <!-- </form> -->
                                </tr>
                                
                            </tbody>
                        
                        </table>
                    </template>
                    <template v-slot:card-button >

                        <form v-on:submit="insertEdu" class="form-label">
                            <input type="text" v-model="insertEduName" class="form-control " placeholder="โปรเจค">
                        <input type="text" v-model="insertEduContent" class="form-control " placeholder="เนื้อหา">

                        <button  type="submit"  class="btn btn-primary">เพิ่ม</button>
                        </form>
                    </template>
                    
                </CardAdmin>
            </div>

    </template>
    <script>
    import axios from 'axios'
    import CardAdmin from '../CardAdmin.vue'
    import Swal from 'sweetalert2';
    
    export default {
      name: 'EduAll',
      components: {
        CardAdmin,
        
      },
      data(){
            return {
            EducationsData:[],
            UpdateEdu:[],
            insertEduName: '',
            insertEduContent: '',
    
            }
        },
      methods:{
        async insertEdu(e){
            e.preventDefault();
            try{
                await axios.post('http://localhost:3000/insert/edu',{
                    edu_name: this.insertEduName,
                    edu_content:this.insertEduContent,
                })

                await this.getEducation();
            } catch (error) {
                console.error('Error fetching quotes:', error);
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
        async DeleteEdu(idEdu){
            // console.log('show id '+ idExp)
            try{
                 await axios.delete(`http://localhost:3000/delete/edu/${idEdu}`)
                // console.log('Delete successful:', response.data);

                await this.getEducation();
            } catch(error){
                return console.error('Error fetching quotes:', error);
            }
        },
        async ShowDeleteEdu(idEdu){
            // console.log('show id '+ idExp)
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                    this.DeleteEdu(idEdu);
                }
                });
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

            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        },
      }, 
      beforeMount(){
        this.getEducation()
        },
      
    }
    
    </script>
    
    <style>
    </style>