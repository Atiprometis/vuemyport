<template>
    <div class="contact-all mt-2">
        <div class="container">
        <div class="row">
            <h2 class=" head-text-about  text-uppercase text-start mt-4">Contact me</h2>
            <div class=" d-flex flex-row justify-content-start ">
                <!-- <h1><font-awesome-icon :icon="['fab', 'facebook']" /></h1> -->
                <a href="https://www.linkedin.com/in/chaitawat/"><h1 class=" p-2 "><font-awesome-icon :icon="['fab', 'linkedin']"  :style="{ color: '#0077b6' }"/></h1></a>
                <a href="https://github.com/Atiprometis"><h1 class="p-2 "><font-awesome-icon :icon="['fab', 'github']" :style="{ color: '#0077b6' }" /></h1></a>
                
                <router-link to="/resume" class="nav-link"><h1 class="p-2"><font-awesome-icon :icon="['fas', 'file']" :style="{ color: '#0077b6' }"/></h1></router-link>
            </div>
            
        </div>
        </div>
        
    </div>
    <div id="targetsocial" class=""></div>
</template>

<script>
export default {
    name: 'ContactSocial',
}
</script>

<style>
.contact-all{
    width: 100%;
    height: 20vh;
    background-color: #fff;
}
.my-icon-color-contact{
    color:#a2d2ff; 
}
</style>