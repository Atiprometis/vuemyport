<template>
    <div>
        
        <slot name="card-header"></slot>
        
        <slot name="card-content"></slot>
        <slot name="card-button"></slot>
    </div>
</template>

<script>


export default {
    name: 'CardAdmin',
    components: {
     
    }
}
</script>

<style>

</style>