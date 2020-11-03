<template>
  <b-col class="book-container">
    <div class="rounded flex-container">
      <img
        class="rounded center"
        src="../assets/img/default-cover.jpg"
        alt="Italian Trulli"
      />
      <div class="book-title">{{ bookTitle }}</div>
      <div class="book-button-container">
        <b-button
          variant="outline-info"
          class="mb-2 show-details"
          href="#"
          @click="redirect()"
        >
          View
          <b-icon icon="box-arrow-up-right" aria-hidden="true"></b-icon>
        </b-button>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "book",
  props: {
    bookTitle: {
      type: String
    },
    bookId: {
      type: Number
    }
  },
  methods: {
    redirect() {
      window.location.href="/book-info/" + this.bookId;
    }
  },
};
</script>

<style scoped>
img {
  height: 250px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.book-container {
  text-align: center;
  padding: 10px;
}

.book-title {
  padding: 10px 5px 5px 5px;
  height: 4em;
}

.btn:not(:disabled):not(.disabled) {
  color: white !important;
  background-color: #43ab61;
  padding-right: 25px;
  padding-left: 25px;
}

.flex-container {
  border: 1px solid #cdcdcd;
  background-color: #fff;
  padding: 15px 5px;
  box-shadow: 5px 10px 18px #888888;
}
</style>
