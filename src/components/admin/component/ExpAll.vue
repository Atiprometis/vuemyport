<template>

<div  class=" col-lg-10 p-0 m-0 d-flex justify-content-center">

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
                                <td>
                                    {{ item.content }}
                                </td>
                                <td>{{ item.location  }}</td>
                                <td>
                                    <button type="button" v-on:click="InputExp(item)" class="btn btn-primary">edit</button>
                                </td>
                                <td>
                                    <button type="button" v-on:click="ShowDeleteExp(item.id_exp)" class="btn btn-danger">delete</button></td>
                                <!-- </form> -->
                                </tr>
                                
                            </tbody>
                        
                        </table>
                    </template>
                    <template v-slot:card-button >
                        <form v-on:submit="insertExp" class="form-label">
                            <input type="text" v-model="insertExpProjectname" class="form-control " placeholder="โปรเจค">
                        <input type="text" v-model="insertExpContent" class="form-control " placeholder="เนื้อหา">
                        <input type="text" v-model="insertExpLocation" class="form-control " placeholder="สถานที่">

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
  name: 'ExpAll',
  components: {
    CardAdmin,
    
  },
  data(){
        return {
            showExp:[],
            UpdateExp:[],
            patchExpShow:[],
            insertExpProjectname: '',
            insertExpContent: '',
            insertExpLocation: '',

        }
    },
  methods:{
    async insertExp(e){
            e.preventDefault();

            try{
                await axios.post('http://localhost:3000/api/insert/exp',{
                    projectname: this.insertExpProjectname,
                    content:this.insertExpContent,
                    location:this.insertExpLocation,
                })

                await this.getExp();
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        }, 
        async getExp(){
            try{
                const response = await axios.get('http://localhost:3000/api/readexp')
                this.showExp = response.data;
                
            } catch (error) {
                return  console.error('Error fetching quotes:', error);
            }
        },
        async DeleteExp(idExp){
            // console.log('show id '+ idExp)
            try{
                 await axios.delete(`http://localhost:3000/api/delete/exp/${idExp}`)
                // console.log('Delete successful:', response.data);

                await this.getExp();
            } catch(error){
                return console.error('Error fetching quotes:', error);
            }
        },
        async ShowDeleteExp(idExp){
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

                    this.DeleteExp(idExp);
                    

                }
                });
        },

        async InputExp(idExp) {
            const projectname = idExp.projectname;
            const content = idExp.content;
            const location = idExp.location;

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

                 await axios.patch('http://localhost:3000/api/update/exp',updateData)


                console.log('returm = '+ this.patchExpShow);
                await this.getExp();
                // location.reload();
                
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        },

  
  }, 
  beforeMount(){
        this.getExp()
    },
  
}

</script>

<style>
</style>