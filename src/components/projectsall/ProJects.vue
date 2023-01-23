<template>
    <div class="all-box-project">
        <div class="container ">
        <div class="row ">
                <div class="col-lg-4 col-sm-12   " v-for="item in 5" :key="item" >
                            <div class="col-12 mt-3   d-flex flex-column text-center  project-box  ">
                            <img class="img-pj " :src=" pic "  >
                                <div class="box-text p-3 mb-3 text-start d-inline-block overflow-scroll  ">
                                    <h3 class="text-main  ">Projectasdasdsasadas3333335dasdsad asdasdasdsadasdd {{ item }}</h3>
                                    <h5 class="text-content m-0 p-0">asdasdasdasd</h5>
                                    <p class="text-type m-0 p-0 ">Web developer</p>
                                </div>
                            </div>
                </div>
                
        </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ProJects',

        data(){
        return{
           pic:"https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2020/06/08/4b0bdfc6-a639-11ea-8ea0-d7434be00753_image_hires_121748.jpg?itok=zq4iUnBF&v=1591589877",
            size:200,
        }
    }
    }
    

</script>

<style>
.all-box-project{
    width:100%;
    height: auto;
    background-color: #f0f0ff;
}
.project-box{

    width: 100%;
    height: 100%;
    position: relative;

}
.img-pj{
    width: 100%;
    height: 40vh;
}
.box-text{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    
    background-color: rgba(255, 255, 255, 0.5);

}
.box-text .text-main {

    color: black;
}
.box-text .text-content {
    color: black;
}
.box-text .text-type {
    color: black;
}
</style>