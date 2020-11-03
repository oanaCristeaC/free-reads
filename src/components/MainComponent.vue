<template>
  <div class="main-container">
    <BookList />
  </div>
</template>

<script>
import BookList from "./BookList.vue";

export default {
  name: "main-component",
  components: {
    BookList
  }
};
</script>

<style scoped></style>
