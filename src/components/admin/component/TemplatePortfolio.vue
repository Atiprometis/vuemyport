<template>
    <div  class=" col-lg-10 p-0 m-0 d-flex justify-content-center">
        <div class="container">
            <div class="row">
                
                
                <div v-if="isPortfolioVisible">
                    <h1>1</h1>
                    <button v-on:click="submitPortfolioEdit()">click 2 </button>
                </div>
                <div v-if="isHiddenPortfolioEdit">
                    <h1>2</h1>
                    <button v-on:click="submitPortfolio()">click 1 </button>
                </div>
            </div>
        </div>
                
    </div>
</template>
<script>
export default {
    name: 'TemplatePortfolio',
    data(){
        return {
            
            isHiddenPortfolio: true,
            isHiddenPortfolioEdit: false,
           
        }
    },
    methods:{
        toggleVisibility(section){
            this.isHiddenPortfolio = section === 'portfolio';
            this.isHiddenPortfolioEdit = section === 'portfolioedit';
            
        },
        submitPortfolio() {
            this.toggleVisibility('portfolio')
            console.log(this.isHiddenPortfolio);
        },
        submitPortfolioEdit() {
            this.toggleVisibility('portfolioedit')

        },
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
</style>