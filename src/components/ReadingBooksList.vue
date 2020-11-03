<template>
  <b-container class="bv-example-row mx-auto reading-list-container" v-if="isSignedin">
    <div v-for="(book, index) in bookList" :key="index">
      <b-row class="row" cols="12">
        <ReadingBook
          :bookTitle="book.title"
          :bookId="book.id"
          :bookAuth="book.authors"
          :bookCatheg="book.categories"
          :bookRatings="book.rating"
          v-if="bookList"
        />
        <div>
        <h3> To add a book to your list: </h3>
        <ul>
        <li> Select "View" of the book;</li>
        <li> Click add to list button from the book details page.</li>
        </ul>
        </div>
      </b-row>
    </div>
  </b-container>
</template>
<script>
import ReadingBook from "@/components/ReadingBook.vue";
export default {
  name: "reading-books-list",
  data: function() {
    return {
      readingList: ["Book one", "Book two", "Book three"]
    };
  },
  components: {
    ReadingBook
  },
  computed: {
    bookList: function() {
      return this.$store.getUserBooks;
    },
    isSignedIn: function() {
      if (this.$store.isSignedIn) {
        return true;
      } else {
        const confirmed = confirm("Signin to see your list!");
        if (confirmed === true) {
          location.href = window.location + "/login-logout";
        } else {
          location.href = window.location
        }
      }

      return false;
    }
  },
  async mounted() {
    await this.getBookList();
  },
  requestBooks() {
    return this.$store.dispatch("getUserBook", { api: this.$api });
  }
};
</script>

<style scoped>
.book-button-container {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -150px;
  padding: 15px;
}

.row {
  display: block;
  margin: 15px 0;
  padding: 10px;
}

.reading-list-container {
  margin: 20px;
  padding-bottom: 100px;
  padding-top: 20px;
}

ul > li {
  list-style: none;
}
</style>
