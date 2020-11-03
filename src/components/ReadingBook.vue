<template>
  <div class="book-container" v-if="isSignedIn">
    <b-col cols="3">
      <div class="rounded flex-container">
        <img
          class="rounded center"
          src="../assets/img/default-cover.jpg"
          alt="Italian Trulli"
        />
      </div>
    </b-col>
    <b-col cols="8">
      <div class="book-title">{{ book.title }}</div>
      <div class="rating">
        <StarRating
          @rating-selected="setRating"
          v-bind:increment="0.5"
          v-bind:star-size="30"
        />
        {{ bookRatings }}
      </div>
      <ul>
        <li class="author">
          <div class="book-label">Author:</div>
          <div v-for="(author, index) in book.authors" :key="index">
            {{ author }}
          </div>
        </li>
        <br />
        <li class="cathegory">
          <div class="book-label">Cathegory:</div>
          <div v-for="(cathegory, index) in book.categories" :key="index">
            {{ cathegory }}
          </div>
        </li>
      </ul>
      <div class="book-button-container">
        <b-button variant="outline-info" class="mb-1 read-book" href="/">
          READ
          <b-icon icon="book" aria-hidden="true"></b-icon>
        </b-button>
        <b-button
          variant="danger"
          class="mb-1 remove-from-list"
          href="#"
          @click="remove"
        >
          REMOVE
          <b-icon icon="file-earmark-minus" aria-hidden="true"></b-icon>
        </b-button>
      </div>
    </b-col>
  </div>
  <div v-else>
    <h4>Please sign in to see your book list.</h4>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "reading-book",
  data: function() {
    return {
      // rating: 0,
      bookAuthors: "Harry",
      bookCathegory: "fantesy"
    };
  },
  props: {
    bookTitle: {
      type: String
    },
    bookId: {
      type: Number
    },
    bookAuth: {
      type: Array
    },
    bookCatheg: {
      type: Array
    },
    bookRatings: {
      type: Number
    }
  },
  computed: {
    isSignedIn: function() {
      return this.$store.isSignedIn;
    }
  },
  methods: {
    setRating: function(rating) {
      this.rating = rating;
      console.log("this.rating", this.rating);
      const str = window.location.pathname;
      const bookId = str.replace(/\D/g, "");
      return this.$store.dispatch("setRate", {
        rating: this.rating,
        id: bookId
      });
    },
    remove() {
      const isSignedIn = this.$store.isSignedIn;

      if (isSignedIn) {
        const str = window.location.pathname;
        const bookId = str.replace(/\D/g, "");
        return this.$store.dispatch("addToList", { id: bookId });
      } else {
        const confirmed = confirm("Signin to add a book to your list!");
        if (confirmed === true) {
          location.href = window.location + "/login-logout";
        }
      }
    }
  },
  components: {
    StarRating
  }
};
</script>

<style scoped>
.book-title {
  text-align: center;
}

.book-details-container {
  margin: 20px;
  padding-bottom: 100px;
  padding-top: 20px;
}

.rating {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
}

.btn:not(:disabled):not(.disabled) {
  color: white !important;
}

.read-book {
  background-color: #43ab61;
  padding-right: 25px;
  padding-left: 25px;
}

.remove-book-from-list {
  background-color: #d12c36;
  color: white !important;
}

.book-button-container {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -150px;
}

a {
  margin: 0 25px;
}

ul {
  list-style: none;
  justify-content: center;
  position: absolute;
  top: 30%;
  left: 20%;
}

li,
.book-label,
.book-label {
  display: inline;
}

.book-label {
  font-weight: bold;
}

.book-container {
  display: flex;
  padding: 15px;
  border: 1px solid #cdcdcd;
  background-color: #fff;
  box-shadow: 10px 10px 18px #888888;
}

li > div {
  display: inline;
}
</style>
