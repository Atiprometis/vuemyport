<template>
    <div class="container">
        <div class="row">
            <div class=" col-lg-3 p-0 m-0 d-flex justify-content-center align-items-center flex-column">
                <h1>table list</h1>

                <button v-on:click="submitAboutme()" type="button" class="btn btn-primary bg-t text-uppercase">about me</button>
                <!-- <div v-show="!isHiddenAboutme">hide me</div> -->
                <button v-on:click="submitPortfolio()" type="button" class="btn btn-primary bg-t text-uppercase">portfolio </button>
                <button v-on:click="submitExp()" type="button" class="btn btn-primary bg-t text-uppercase">EXPERIENCE - EDUCATION</button>
                <button v-on:click="submitContact()" type="button" class="btn btn-primary bg-t text-uppercase">CONTACT</button>
            

                
            </div>
            <div v-if="isHiddenAboutme" class=" col-lg-9 p-0 m-0">
                <div  class="bg-t-2"></div>
                <CardAdmin>
                    <template v-slot:card-header>
                        <h1> Aboutme แก้ไข</h1>
                    </template>
                    <template v-slot:card-content >
                        <div class="input-form-admin">
                        <input type="text">
                    </div>
                    </template>
                    <template v-slot:card-button >

                        <button type="button" class="btn btn-primary">Primary</button>

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
                        <h1>ดดด</h1>
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
            isHiddenContact: false,
        }
    },
    methods: {
        submitAboutme() {
        this.isHiddenAboutme = true;
        this.isHiddenPortfolio = false;
        this.isHiddenExp = false;
        this.isHiddenContact = false;
        
        },

        submitPortfolio() {
        this.isHiddenAboutme = false;
        this.isHiddenPortfolio = true;
        this.isHiddenExp = false;
        this.isHiddenContact = false;

        },
        submitExp() {
        this.isHiddenAboutme = false;
        this.isHiddenPortfolio = false;
        this.isHiddenExp = true;
        this.isHiddenContact = false;

        },
        submitContact() {
        this.isHiddenAboutme = false;
        this.isHiddenPortfolio = false;
        this.isHiddenExp = false;
        this.isHiddenContact = true;

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
</style>