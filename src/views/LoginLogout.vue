<template>
  <div class="login-logout-container">
  <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'
  export default {
    name: 'login-logout',
    components: {
      LoginComponent
    }
  }
</script>

<style scoped>
.login-logout-container{
  height: 100vh;
}
</style>