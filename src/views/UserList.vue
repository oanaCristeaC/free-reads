<template>
  <div class="user-list">
    <h5>MY READING LIST</h5>
    <ReadingBooksList />
  </div>
</template>

<script>
import ReadingBooksList from "@/components/ReadingBooksList.vue";
export default {
  name: "userList",
  components: {
    ReadingBooksList
  }
};
</script>

<style scoped>
h5 {
  text-align: center;
  padding-top: 20px;
  color: #5c5b5e;
  font-weight: 400;
}
</style>
