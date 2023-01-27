<template>
    <div class="bg-light">
        <div class="container">
            <div class="row">
                <h2 class=" head-text-about  text-uppercase text-start mt-2">ABOUT ME</h2>
                <div class=" col-lg-12 d-flex flex-row ">
                    <div class="col-lg-6 col-sm-12 mt-3 d-flex justify-content-start flex-column text-start ">
                        <h1> experience</h1>
                        <div class=" d-flex flex-row">
                            <div class="timeline"></div>
                            <div class="dot m-1"></div>
                           
                            <div class=" d-flex flex-column text-start ">
                                <h3>KARINA</h3>
                                <p>DATE</p>
                                <p>contact</p>
                            </div>
                        </div>
                        

                    </div>
                    <div class="col-lg-6 col-sm-12 mt-3 d-flex justify-content-start flex-column text-start ">
                        <h1> education</h1>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'AboutTimeline',

        data(){
        return{
           
        }
    }
    }
    

</script>

<style>

.head-text-about  {

text-decoration: underline;
text-decoration-color: #1095c1;
text-underline-offset: 8px;

}
.dot {
  padding: 1px 4% 0 0%;

  display: inline-block;
  position: relative;

}
.dot::after {
    content: "";
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    border: #1095c1 solid 4px;
    z-index: 2;
}
.timeline {
   
  position: relative;

  
  /* background-color: rgb(206, 39, 39); */


}
.timeline::after {
    content: "";
  height:150px;
  width: 5px;
  position: absolute;
  top:0;
    margin-left: 1.5vh;
    margin-top: 1vh;
  background-color: #1095c1;

  display: inline-block;
}
</style>