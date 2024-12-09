<template>
    <div>
        <NavBarResume/>

        <div class="container">
            <div class="row">
                <div class="pt-5 mt-5" >
                    <img class="resume-photo" :src="imgUrlBanner" alt="" loading="lazy"  :style="{'--background-image-url':`url(${imgUrlBanner})`}">
                </div>

                <div class=" d-flex justify-content-center align-items-center">
                    <button type="button" class="btn btn-primary text-uppercase mt-4 " style="width: 100%;" @click="downloadPdf">dowload resume.PDF</button>
                </div>

            </div>
        </div>
        <ContactSocial/>
        
    </div>
</template>
<script>
import NavBarResume from '../components/navbar/NavBarResume.vue'
import ContactSocial from '../components/social/ContactSocial.vue'




export default {
    name: 'ResumePage',
    components: {
        NavBarResume,
        ContactSocial,
    },
    data(){
        return{
            imgUrlBanner: require('../assets/img/resume/Resume.png'),
            pdfUrl: '../assets/file/resume/resume_chaithawat.pdf',
        }
    },
    methods:{
        downloadPdf() {
        const url = '/resume_chaithawat.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume_chaithawat.pdf'; // เปลี่ยนเป็นชื่อไฟล์ที่ต้องการดาวน์โหลด
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        }
    }
}
</script>

<style>
    .resume-photo{
        width: 100%;
        height: 100%;
        filter: drop-shadow(-1px 0px 7px #969696);


    }

    
</style>