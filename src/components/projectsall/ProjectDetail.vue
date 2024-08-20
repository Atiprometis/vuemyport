<template>
    <div>
        <h1>temple test</h1>
        Project ID: {{ id }}
        <br>
        Project ID: {{  $route.params.idproject }}
    </div>
</template>

<script>



export default {
    name: 'ProjectDetail',
    components: {
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

</style>