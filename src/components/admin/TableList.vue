<template>
    <div class="container">
        <div class="row">
            <div class=" col-lg-2 p-0 m-0 d-flex justify-content-center align-items-center flex-column" style="height: 100%;">
                <!-- <h1>table list</h1> -->

                <button v-on:click="submitAboutme()" type="button" class="btn btn-primary bg-t text-uppercase">about me</button>
                <!-- <div v-show="!isHiddenAboutme">hide me</div> -->
                <button v-on:click="submitPortfolio()" type="button" class="btn btn-primary bg-t text-uppercase">portfolio </button>
                <button v-on:click="submitExp()" type="button" class="btn btn-primary bg-t text-uppercase">EXPERIENCE</button>
                <button v-on:click="submitEdu()" type="button" class="btn btn-primary bg-t text-uppercase">EDUCATION</button>
                <!-- <button v-on:click="submitContact()" type="button" class="btn btn-primary bg-t text-uppercase">CONTACT</button> -->
            
            </div>
            <!-- About me -->
             <AboutMeAll v-if="isAboutmeVisible"/>
            <!-- portfolio -->
            <PortfolioAll v-if="isPortfolioVisible"  />
            <!-- EXPERIENCE -->
            <ExpAll  v-if="isExpVisible" />
            <!-- EDUCATION  -->
            <EduAll v-if="isEduVisible"/>
            
            <!-- CONTACT -->
            <div v-if="isContactVisible"  class=" col-lg-10 p-0 m-0 d-flex justify-content-center ">

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
// import axios from 'axios'
// import Swal from 'sweetalert2';

import PortfolioAll from './component/PortfolioAll.vue'
import ExpAll from './component/ExpAll.vue'
import EduAll  from './component/EduAll.vue'
import AboutMeAll from './component/AboutMeAll.vue'

export default {
    
    name: 'TableList',
    components: {
        CardAdmin,
        PortfolioAll,
        ExpAll,
        EduAll,
        AboutMeAll,
    },
    
    data(){
        return {
            id:2,
            content:'',
            isHiddenAboutme: true,
            isHiddenPortfolio: false,
            isHiddenExp: false,
            isHiddenEdu: false,
            isHiddenContact: false,
            aboutmeData: [],
            aboutmeDataPost: [],
        }
    },
    methods: {
       
        toggleVisibility(section){
            this.isHiddenAboutme = section === 'aboutme';
            this.isHiddenPortfolio = section === 'portfolio';
            this.isHiddenExp = section === 'exp';
            this.isHiddenEdu = section === 'edu';
            this.isHiddenContact = section === 'contact';
        },
        submitAboutme() {
       this.toggleVisibility('aboutme')
        },
        submitPortfolio() {
            this.toggleVisibility('portfolio')

        },
        submitExp() {
            this.toggleVisibility('exp')

        },
        submitEdu() {
            this.toggleVisibility('edu')

        },
        submitContact() {
            this.toggleVisibility('contact')

        },
        
    },

    computed: {
        isAboutmeVisible() {
        return this.isHiddenAboutme;
        },
        isPortfolioVisible() {
            return this.isHiddenPortfolio;
        },
        isExpVisible() {
        return this.isHiddenExp;
        },
        isEduVisible() {
            return this.isHiddenEdu;
        },isContactVisible() {
        return this.isHiddenContact;
        },
        
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
    .table-all{ 
        height:100%;
    }
</style>