<template>
  <NavBarForProject>
    
  </NavBarForProject>
    <div class="container-fluid ">
  <div class="row">
    <div class="banner-main p-0 m-0 col-lg-12">

    </div>
    <div class="col-lg-12" style="height: 300px;">
        <div class="projevt-conntent">
          <h1>อธิบาย</h1>
        </div>
    </div>
    <div class="col-lg-12" style="height: 300px;">
      <div class="skill-all">
        <h1>skill</h1>
      </div>
    </div>
    <div class="col-lg-12" style="height: 300px;">
      <div class="photo-project">
        <h1> photo</h1>
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import NavBarForProject from '../navbar/NavBarForProject.vue'


export default {
    name: 'ProjectDetail',
    components: {
      NavBarForProject,
    },
    data() {
    return {
      id: null
    };
  },
  created() {
    this.id = this.$route.params.idproject;
    console.log("this id = "+this.id);
  }
}
</script>

<style>
  .banner-main{
    background-image: url('../../assets/img/project/jisoo2.jpeg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top center;
    background-size: cover; /* or 100% 100% */
    height: 100vh;
  }
</style>