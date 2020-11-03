<template>
  <div class="account">
   <Register />
  </div>
</template>

<script>
import Register from '@/components/Register.vue'
  export default {
    name: 'Account',
    components: {
      Register
    }
  }
</script>

<style scoped>
.account {
  background-color: #F7F7F7;
  height: 100vh;
}
</style>