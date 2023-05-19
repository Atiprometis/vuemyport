<template>
<div class=" shadow-sm fixed-top bg-white">

        <nav class=" container navbar navbar-expand-lg  ">
        <div class="container-fluid ">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">

                <router-link to="/" class="nav-link">HOME</router-link>
                </li>
                <li class="nav-item">

                <router-link to="/aboutme" class="nav-link">about me</router-link>
                </li>

                <li class="nav-item">
                    <a href="" class="nav-link">contact</a>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>

  
</div>
</template>

<script>
export default{
    name: 'NavBarview',
}

</script>
<style>

</style>