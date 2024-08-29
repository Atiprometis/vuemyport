<template>
  <NavBarForProject>
    
  </NavBarForProject>
    <div class="container-fluid ">
  <div class="row">

      <div class="banner-main p-0 m-0 col-lg-12 d-flex justify-content-center align-items-center">

          <div class=" d-flex flex-column">
            <h1 class="heading-main"> {{ projectDetail[0].projectName }}</h1>
            <p class="heading-main">{{ projectDetail[0].projectType }}</p>

          </div>
      </div>

    <div class="col-lg-12" >
        <div class="project_content flex-column" >
          <h5 class="projecthead_text">อธิบายโปรเจค</h5>
          <span class="projectcontent_text">{{ projectContent }}</span>
        </div>
    </div>
    <div class="col-lg-12" >
      <div class="skill-all project_content flex-column">
        <h5 class="projecthead_text">Technology</h5>
        <span class="skill-text-content">{{ skillContent }}</span>
      </div>
    </div>
    <div class="col-lg-12 d-flex flex-row pt-5 pb-5" >
      <div class="photo-project " v-for="(image,index) in imgUrl.slice(0,4) " :key="index">
        <img class="" style="height:300px;width: 300px;" :src="image.imgFromDatabase" alt="">
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
      id: null,
      projectDetail:[{
        projectName:'asdsadasdasd',
        projectType:'WEBSITE',

      }],
      projectContent:'ผลไม้สตูดิโอโซนี่เลสเบี้ยนปอดแหก ไบเบิลชัวร์ซาตานครัวซองพลานุภาพ ตื้บแมชีน ฮิวานิลลาแอดมิสชัน รีดไถวอลนัทมะกัน ดราม่าคาแรคเตอร์สเต็ปกราวนด์ คาปูชิโนวอฟเฟิล แคร์ โอเลี้ยงเซฟตี้ สตีล ซีนีเพล็กซ์พุทธศตวรรษฮาโลวีนแซ็ก แอ็คชั่นนายแบบคอมเมนต์ สเตชันมั้งเพลซอมาตยาธิปไตยรีสอร์ท เลดี้จิ๊กซี้ลิมิต ป๊อกบอร์ดคาปูชิโนแซนด์วิช เพนตากอนไทม์จิ๊ก',
      skillContent:'บ็อกซ์ แซมบ้าพีเรียดโกะไมค์ อริยสงฆ์นิวมาร์เก็ตติ้ง แจ็กเก็ตหงวนเสกสรรค์ผ้าห่มเทคโนแครต โมหจริตฟินิกซ์มายาคติมาร์เก็ตติ้ง อึ้มตุ๊ดผิดพลาดคำสาป ออร์แกนรุสโซฮันนีมูน ฮิตดยุก เย้วแล็บบ๊อบ ม้งออร์แกนโกะ มั้ยสเตเดียมคูลเลอร์เปปเปอร์มินต์คอนแท็ค ควีนเทียมทานม้าหินอ่อนไนท์สหัสวรรษ โฟมอีโรติกโปรโมชั่น ไฟลต์ริกเตอร์ไมเกรนแทงกั๊ก โลโก้ บ๊อบออสซี่พาเหรดพลานุภาพ',
      imgUrl: [{
        imgFromDatabase:"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59364.jpg?t=st=1724913873~exp=1724917473~hmac=d39268603df0325df11afe90ccd0c3fe446f093306798f125d145ac6161492e6&w=1800",
      },{
        imgFromDatabase:"https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
      },
      {imgFromDatabase:"https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"},
      {imgFromDatabase:"https://hackspirit.com/wp-content/uploads/2021/06/pexels-andrea-piacquadio-3937468-1.jpg"}
    ],
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
      position: relative;

      height: 100vh;
      width: 100%;
      overflow: hidden;
    }
    .banner-main::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('../../assets/img/project/jisoo2.jpeg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: top center;
      background-size: cover; /* or 100% 100% */
      filter: brightness(50%);
      z-index: 0;

    }
  
  
 
  .heading-main{
    color: #fff;
    z-index: 1;
    position: relative;
  }
  .projecthead_text{
    color:#a7a7a7;
  }

  .project_content{
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 0 10%;
    height: 100vh;
    width: 100%;
  }
  .projectcontent_text{

  }
  .photo-project{
    width:100%;

  }
</style>