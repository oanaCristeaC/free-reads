<template>
  <b-container class="bv-example-row mx-auto reading-list-container">
    <b-row class="row" cols="12" v-if="book">
      <b-col cols="3">
        <div class="rounded flex-container">
          <img
            class="rounded center"
            src="../assets/img/default-cover.jpg"
            alt="Italian Trulli"
          />
          <div class="rating">
            <StarRating :rating="bookRatings" v-bind:star-size="30" />
          </div>
        </div>
      </b-col>
      <b-col cols="9">
        <div class="book-title">{{ book.title }}</div>
        <div class="rating">
          <StarRating
            @rating-selected="setRating"
            v-bind:increment="0.5"
            v-bind:star-size="30"
          />
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
          <b-button
            variant="outline-info"
            class="mb-1 show-details"
            href="#"
            @click="addToList"
          >
            ADD TO LIST
            <b-icon icon="file-earmark-plus" aria-hidden="true"></b-icon>
          </b-button>
          <b-button
            variant="outline-info"
            class="mb-1 show-details"
            href="/files/Eat-Pray-Love.pdf" download
          > DOWNLOAD 
            <b-icon icon="box-arrow-down" aria-hidden="true"></b-icon>
          </b-button>
        </div>
      </b-col>
    </b-row>
    <b-row class="row" cols="12" v-else>
      <b-col cols="1">
        <div>
          <b-spinner label="Loading..."></b-spinner>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  name: "book-details",
  data: function() {
    return {
      rating: 2,
      bookAuth: "Harry",
      bookCathegory: "fantesy"
    };
  },
  computed: {
    book: function() {
      const bookInfo = this.$store.getters.getBook;
      console.log("bookInfo", bookInfo)
      return bookInfo;
    },
    bookRatings: function() {
      const rating = parseInt(this.book.rating);
      return rating;
    }
  },
  mounted() {
    this.requestBookById();
  },
  methods: {
    setRating: function(rate) {
      const str = window.location.pathname;
      const id = str.replace(/\D/g, "");

      console.log("rating", rate)
      return this.$store.dispatch("setRate", {
       rate,
        id
      });
    },
    requestBookById() {
      const str = window.location.pathname;
      const bookId = str.replace(/\D/g, "");
      return this.$store.dispatch("getBookById", { id: bookId });
    },
    addToList() {
      const isSignedIn = this.$store.isSignedIn;

      if (isSignedIn) {
        const str = window.location.pathname;
        const bookId = str.replace(/\D/g, "");
        return this.$store.dispatch("addToList", { id: bookId });
      } else {
        const confirmed = confirm("Please sign in first!");
        if (confirmed === true) {
          location.href = window.location.origin + "/login-logout";
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
.book-button-container {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -150px;
  padding: 15px;
}

.row {
  margin: 15px 0;
  padding: 10px;
}

.reading-list-container {
  margin: 20px;
  padding-bottom: 100px;
  padding-top: 20px;
}

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
  background-color: #43ab61;
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

li > div {
  display: inline;
}
</style>
