<template>
    <div>
        <p>Home.vue (Route: /)</p>
        <button @click="onClickGo">Go to /hello</button>
    
        <p>{{ message }}</p>
    
    
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data: {
      message:'Hello from home ...'
    },
    methods: {
      onClickGo() {
        this.$router.push('/hello')
      }
    }
  }
</script>


<style scoped>
    p {
        color: deeppink;
    }
</style>