<template>
  <div class="login">
    <h1>login page {{ msg }}</h1>
    <router-link to="/">to hello page</router-link>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
