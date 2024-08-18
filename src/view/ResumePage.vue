<template>
    <div>
        <NavBarview/>
        <h1> this is resume</h1>
        <slot></slot>
        <ContactSocial/>
        
    </div>
</template>
<script>
import NavBarview from '../components/navbar/NavBar.vue'
import ContactSocial from '../components/social/ContactSocial.vue'


export default {
    name: 'ResumePage',
    components: {
        NavBarview,
        ContactSocial,
    }
}
</script>

<style>

</style>