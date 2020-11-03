<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterComponent />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  background-color: #F7F7F7;
  color:#5c5b5e;
  font-weight: 400;
  height: 100vh;
}

</style>
