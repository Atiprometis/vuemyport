<template>
    <div class="about">
      <NavBarview/>
      asdasd
        <h class=" bg-danger">ABOUT ABOUTE</h>
        <AboutTimeline/>
        <ContactSocial/>

    </div>
</template>

<script>
import NavBarview from '../components/navbar/NavBar.vue'

import AboutTimeline from '../components/history/AboutTimeline.vue'
import ContactSocial from '../components/social/ContactSocial.vue'

export default {
  name: 'AboutMe',
  components:{
    NavBarview,
    AboutTimeline,
    ContactSocial,
  }
 
}
</script>