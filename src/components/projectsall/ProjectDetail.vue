<template >
  <NavBarForProject>
    
  </NavBarForProject>
  <div v-if="isLoading">Loading...</div>
    <div class="container-fluid " >
  <div class="row">
    
      <div  class="banner-main p-0 m-0 col-lg-12 d-flex justify-content-center align-items-center flex-column" 
      :style="{'--background-image-url':`url(${imgUrlBanner})`}">

          <div  class=" d-flex flex-column" v-if="dataPortfolio.length > 0" >
            <h1 class="heading-main"> {{ dataPortfolio[0].projectname }}</h1>
            <p class="heading-main">{{ dataPortfolio[0].type }}
              
            </p>

          </div>
          <h1 class="animation-up-and-down  text-light position-absolute" style="z-index: 1; bottom: 0;">
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </h1>
          
        </div>
      <div class="box" ></div>

      <div class="col-lg-12 animete-top-down" >
        <div class=" project_content justify-content-center align-items-center   flex-column" >
          <h4 class="projecthead_text">อธิบายโปรเจค </h4>

          

          <span v-if="dataPortfolio.length > 0"  class="skill-text-content">{{ dataPortfolio[0].description }}</span>
        </div>
      </div>
      <div class="col-lg-12 p-0 add-opacity d-flex flex-row  "  style="background-color: #EF9C66;">
        <div class="col-lg-6 skill-all project_content flex-column animete-top-down">
          <h3 class="projecthead_text pt-4 text-light">Technology</h3>
          <div class="d-flex flex-row">
            <ul class=" d-flex flex-row justify-content-start text-light" >    
              <li class=" " v-for="(skill,index) in dataTechnology.skills" :key="index"> 
                <h1 class="animete-top-down fontawesomes p-3 pb-0 m-0" :style="{transitionDelay: (0.3 * (index+1))+'s'}">
                <font-awesome-icon :icon="[skill.font_awesome_name , skill.font_awesome_icon ]" :style="{color: '#'+ skill.font_color}" />
                </h1>
                <span>{{ skill.font_awesome_icon }}</span>
              </li>
            </ul>
          </div>
          <span v-if="dataPortfolio.length > 0"  class="skill-text-content text-light">{{ dataPortfolio[0].skillcontent }}</span>
        </div>
        <div class="col-lg-6 p-0 skill-all project_content d-flex align-items-end flex-column animate-on-right ">
          
          <img class="img_techno" :style="{'--background-image-techno':`url(${imgTechnology})`}" alt="">

        </div>
      </div>

      <div  class="col-lg-12 p-0 m-0 add-opacity  "  style="background-color: #78ABA8">
        <div class="skill-all project_content pt-3 align-items-center flex-column animete-top-down">
          <h3  class="projecthead_text text-light mt-4">บทบาทหน้าที่ และ โปรเจค</h3>
          <span v-if="dataPortfolio.length > 0"  class="skill-text-content text-light">{{ dataPortfolio[0].pj_role }}</span>
          <h5 class="projecthead_text text-light pt-3">
            MY PROJECT GITHUB
          </h5>
          <ul v-if="dataPortfolio.length > 0"  class="role_git d-flex justify-content-start align-items-start text-light ">
            <li><a :href="myGit" target="_blank"  style="color:#fff;">{{ dataPortfolio[0].pj_link }}</a></li>
          </ul>
        </div>
      </div>

      <div  class="col-lg-12 add-opacity  "  style="background-color: #FCDC94; ">
        <div class="skill-all project_content flex-column justify-content-center animete-top-down">
          <h3 class="projecthead_text w-100" style="color: #000;">ความท้าทายและการเรียนรู้</h3>
         
          <span v-if="dataPortfolio.length > 0"  class="skill-text-content " style="color: #000;">{{ dataPortfolio[0].pj_challenge }}</span>
        </div>
      </div>

      <!-- <div class="col-lg-12 d-flex flex-row p-0 m-0" >
        <div class="photo-project "  v-for="(image,index) in imgUrl.slice(0,4) " :key="index">
          <img class="img_project_style animate-on-right" :style="{transitionDelay: (0.2 * (index+1))+'s'}" :src="image.imgFromDatabase" alt="">
        </div>
      </div> -->
      

    
  </div>
  <ContactSocial/>
</div>
</template>
<p v-else>Loading...</p>
<script>
import NavBarForProject from '../navbar/NavBarForProject.vue'
import ContactSocial from '../social/ContactSocial.vue'
import axios from 'axios'

export default {
    name: 'ProjectDetail',
    components: {
      NavBarForProject,
      ContactSocial,
    },
    data() {
    return {
      isLoading: true,
      id: null,
      dataPortfolio: [],
      projectDetail:[{
        projectName:'ชื่อโปรเจค',
        projectType:'WEBSITE',

      }],
      projectContent:'ผลไม้สตูดิโอโซนี่เลสเบี้ยนปอดแหก ไบเบิลชัวร์ซาตานครัวซองพลานุภาพ ตื้บแมชีน ฮิวานิลลาแอดมิสชัน รีดไถวอลนัทมะกัน ดราม่าคาแรคเตอร์สเต็ปกราวนด์ คาปูชิโนวอฟเฟิล แคร์ โอเลี้ยงเซฟตี้ สตีล ซีนีเพล็กซ์พุทธศตวรรษฮาโลวีนแซ็ก แอ็คชั่นนายแบบคอมเมนต์ สเตชันมั้งเพลซอมาตยาธิปไตยรีสอร์ท เลดี้จิ๊กซี้ลิมิต ป๊อกบอร์ดคาปูชิโนแซนด์วิช เพนตากอนไทม์จิ๊ก',
      skillContent:'บ็อกซ์ แซมบ้าพีเรียดโกะไมค์ อริยสงฆ์นิวมาร์เก็ตติ้ง แจ็กเก็ตหงวนเสกสรรค์ผ้าห่มเทคโนแครต โมหจริตฟินิกซ์มายาคติมาร์เก็ตติ้ง อึ้มตุ๊ดผิดพลาดคำสาป ออร์แกนรุสโซฮันนีมูน ฮิตดยุก เย้วแล็บบ๊อบ ม้งออร์แกนโกะ มั้ยสเตเดียมคูลเลอร์เปปเปอร์มินต์คอนแท็ค ควีนเทียมทานม้าหินอ่อนไนท์สหัสวรรษ โฟมอีโรติกโปรโมชั่น ไฟลต์ริกเตอร์ไมเกรนแทงกั๊ก โลโก้ บ๊อบออสซี่พาเหรดพลานุภาพ',
      myGit:'https://github.com/Atiprometis/fixfoliofinalproject',
      challengesAndLearnings:'โปรเจคนี้เป็นโปรเจค ที่ได้เรียนรู้อะไรมากมาย เกี่ยวกับ Laravel มากในส่วน front-end ไม่มีปัญหาอะไร ส่วน back-end จะติดปัญหามาก คงเป็นการเชื่อมข้อมูล การออกแบบฐานข้อมูล ความท้าทายคือได้ทำทั้ง front-end และ back-end เลยได้เรียนรู้ทั้งสองอย่าง',
      imgUrl: [{
        imgFromDatabase:"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59364.jpg?t=st=1724913873~exp=1724917473~hmac=d39268603df0325df11afe90ccd0c3fe446f093306798f125d145ac6161492e6&w=1800",
      },{
        imgFromDatabase:"https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
      },
      {imgFromDatabase:"https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"},
      {imgFromDatabase:"https://hackspirit.com/wp-content/uploads/2021/06/pexels-andrea-piacquadio-3937468-1.jpg"},
    ],
    dataYourRole: "หน้าที่รองช่วยออกแบบหน้าเว็บไซต์ หน้าที่หลักคือเขียน code ทั้ง front-end แลพ back-end เขียนฝั่ง front-end คือ เขียนตามดีไซน์หน้าเว็บทั้งหมด, ฟังก์ชั่น, และ เชื่อมต่อกับฐานข้อมูล ในส่วนของ ฝั่ง back-end จะเป็นเรื่องของจัดการ database โดยใช้ Mysql ดูในเรื่อง การออกแบบฐานข้อมูล กับ ส่งข้อมูลออก",
    imgUrlBanner: require('../../assets/img/project/jisoo2.jpeg'),
    imgTechnology: require('../../assets/img/project/work3.jpg'),
    dataTechnology: {skills:[{
      id:"1",
      project_id:"1",
      font_awesome_name:"fab",
      font_awesome_icon:"html5",
      font_color:"ec4432",

    },{
      id:"2",
      project_id:"1",
      font_awesome_name:"fab",
      font_awesome_icon:"laravel",
      font_color:"fd523f",
    },{
      id:"3",
      project_id:"1",
      font_awesome_name:"fab",
      font_awesome_icon:"css3-alt",
      font_color:"3074e8",
    },{
      id:"4",
      project_id:"1",
      font_awesome_name:"fab",
      font_awesome_icon:"vuejs",
      font_color:"5abf6b",
    }
  ]}

    };
  },
  async created() {
    this.id = this.$route.params.idproject;
    this.getDataProject(this.$route.params.idproject);
    this.isLoading = false;
  },
  methods:{
    scrollToTop() {
    window.scrollTo(0,0);
  },
   async  getDataProject(id){
      try{
        const response = await axios.get(`http://localhost:3000/api/getdata/portfolio/${id}`)
          console.log("reson :"+ response.data)
          this.dataPortfolio = response.data;
      }catch(error){
        return  console.error('Error fetching quotes:', error);
      }
    }
  },
   mounted() {
        function getDisplayProjectOnScrolling() { 
                   const animation_element = document.querySelectorAll(' .animete-top-down, .animete-on-scroll, .add-opacity, .animate-on-right, .animete-top-down-img');
                       const observer = new IntersectionObserver((entries)=>{
                           entries.forEach((entry)=>{
                                if (entry.intersectionRatio > 0.4) {
                           entry.target.classList.add('add-animate');

                                   } 
                                   else if (entry.intersectionRatio < 0.4) {
                          //  entry.target.classList.remove('add-animate');
                                   }
                           })
                       },{
                           root: null,
                           threshold: 0.4,
                       });
                       for (let i = 0; i < animation_element.length; i++) {
                           const el = animation_element[i];
                           observer.observe(el);
                       }
               }
               getDisplayProjectOnScrolling();

                
               
  },
  
}
</script>

<style>
:root{
  --font-size-16: 1.125rem;
}
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
      background-image: var(--background-image-url);
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: top center;
      background-size: cover; 
      filter: brightness(50%);
      z-index: 0;

    }
    .skill-all .role_git   {
      width: 100%;
      list-style-type: disc; 
      padding-left: 20px; 
      }
   
  .heading-main{
    color: #fff;
    z-index: 1;
    position: relative;
  }
  .projecthead_text{
    color:#a7a7a7;
    
  }
.skill-text-content{
  font-size:var(--font-size-16);
}
  .project_content{
    display: flex;
    justify-content:flex-start;
    align-items: flex-start;
    padding: 0% 5% 0  ;
    height: 50vh;
    width: 100%;

  }
  .col-lg-12:nth-of-type(4) .project_content  {
    height: 75vh;
    justify-content:flex-start;


  }
  .col-lg-12:nth-of-type(4) .project_content  ul li{
    justify-content:flex-start;
    align-items: flex-start;


  }
  
  .photo-project{
    width:100%;
    height:40vh;
  }
  .img_project_style{
     flex:1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .project_ivisible{

    opacity: 0;
    transform: translate(0,-80px);
    transition: all 1s ease-out;
    transition-delay: 0.2s;
    /* display: none; */
  }
  
  .animete-on-scroll{
    opacity: 0;
    transform: translate(-200px,0);
    transition: all 1s ease-out;
    transition-delay: 0.2s;
}

.animete-top-down{
    opacity: 0;
    transform: translate(0,-80px);
    transition: all 1s ease-out;
    transition-delay: 0.5s;
  
}
.animete-top-down-img{
    opacity: 0;
  
    transform: translate(0px,0px);
    transition: all 1s ease-out;
    transition-delay: 0.5s;
  
}
.add-opacity{
    opacity: 0;
    transform: translate(0,0px);
    transition: all 0.2s ease-out;
    transition-delay: 0.1s;
}
.animate-on-right{
    opacity: 0;
    transform: translate(-50px,0);
    transition: all 1s ease-out;
    transition-delay: 0.2s;
    
}
.animation-top-up{
    animation-name: skill-up-down;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: 0.8s;
}
.animation-up-and-down{
    animation-name: add-up-and-down;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: 0.8s;
}

@keyframes add-up-and-down {
            0% {

              transform: translate(0,0px);
            }
            50% {
              transform: translate(0,-10px);
            }
            100% {
              transform: translate(0,0px);
            }
            
}           

.img_techno {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--background-image-techno);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
  z-index: -1;
  display: block;
 outline: none;
  border: none;
}

.add-animate{

opacity: 1;
transform: translate(0,0);
}

  
</style>