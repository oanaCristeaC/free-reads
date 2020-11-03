<template>
  <div class="book-info">
    <h5>BOOK DETAILS</h5>
    <BookDetails />
  </div>
</template>

<script>
import BookDetails from "@/components/BookDetails.vue"; 
export default {
  name: "BookInfo",
  components: {
    BookDetails
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
.book-info {
  height: 100vw;
  background-color: #F7F7F7;
}
</style>
