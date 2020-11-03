<template>
  <b-container class="bv-example-row mx-auto book-list-container">
    <b-row cols="1" cols-md="2" cols-lg="4" cols-xl="5">
      <div v-for="(book, index) in books" :key="index">
        <Book :bookTitle="book.title" :bookId="book.id"/>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import Book from "./Book.vue";
export default {
  name: "book-list",
  data: function() {
    return {
      //books: []
    };
  },
  components: {
    Book
  },
  computed: {
    books: function() {
     return this.$store.getters.getBooks;
    }
  },
  async mounted() {
    await this.requestBooks();
  },
  methods: {
    requestBooks() {
      return this.$store.dispatch('getBook')
    }
  }
};
</script>

<style scoped>
.book-list-container {
  margin: 20px;
  padding-bottom: 100px;
  padding-top: 20px;
}
</style>
