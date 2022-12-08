<template>
    <div class="con d-flex justify-content-end ">
        <div class="bigblock-arrow ">
        
    </div>
    
    <!-- <div class="arrow-left"></div> -->
        <div class="bigblock "></div>
        

    <!-- <div class="bigblock3 ">
        
    </div> -->
    </div>
</template>

<script>
export default{
    name: 'BigBlock'
}
</script>

<style>
.con{
    width: 100%;
}
.bigblock{

    position: relative;
    width:400px;
    height: 400px;
    background: #FFEAA7;


}
.bigblock-arrow{
    position: relative;
    width: 15%;
    padding-bottom:15%;
    /* background: #2a9a28; */
    transform-origin:100% 0;
    transform: rotate(-45deg);
    border-radius: 50px 0px 0px 0;
    overflow: hidden;
}
.bigblock-arrow::after{
    position: absolute;
    content: "";
    top: -1px; right:-3px;
    width:100%; height:100%;
    transform: rotate(45deg);
    background: #FFEAA7;
    transform-origin:inherit;
}

.arrow-left {  
  position: relative;
  width: 15%;
  padding-bottom:15%;
  border-radius: 10px;
  /* overflow: hidden; */
  transform-origin:100% 0;
  /* transform: rotate(-45deg); */
  background: #FFEAA7;
}
.arrow-left:after {
  content: "";
  position: absolute;
  top: -1px; right:-4px;
  width:100%; height:141%;
  /* transform-origin:inherit; */
  /* transform: rotate(45deg); */
  /* background: #000; */
  
}
.bigblock3{


width: 40%;
height: 400px;
background: #25318e;

}
</style>