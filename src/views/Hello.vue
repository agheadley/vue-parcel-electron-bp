<template>
    <div>
     <p>Hello.vue (Route: /hello)</p>
        <button @click="onClickHello">Back</button>
    </div>
</template>

<script>
  export default {
    name: 'Hello',
    methods: {
      onClickHello() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>