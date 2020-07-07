<template>
    <div>
        <p>Home.vue (Route: /)</p>
        <button @click="onClickGo">Go to /hello</button>
    </div>
</template>

<script>
  export default {
    name: 'Home',
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