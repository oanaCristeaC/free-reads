import Vue from "vue";
import Vuex from "vuex";
//Simport { set } from "core-js/fn/dict";
// import { use } from "vue/types/umd";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allBooks: null,
    bookDetails: null,
    email: null,
    signedIn: false,
    userBooks: null
  },
  mutations: {
    retreiveBook: (state, books) => {
      state.allBooks = books.booksInfo;
    },
    retreiveBookById: (state, book) => {
      state.bookDetails = book.bookInfo;
    },
    registered: (state, user) => {
      state.email = user.email;
    },
    signin: (state, user) => {
      state.signedIn = user.signedIn;
    },
    bookList: (state, books) => {
      state.userBooks = books.list;
    }
  },
  getters: {
    getBooks: state => {
      return state.allBooks;
    },
    getBook: state => {
      return state.bookDetails;
    },
    isRegistered: state => {
      return state.email;
    },
    isSignedIn: (state, api) => {
      return state.signedIn || api.fetch;
    },
    bookList: state => {
      return state.userBooks;
    }
  },
  actions: {
    //TODO: post rating
    getBook(context) {
      async function fetchBooks() {
        const response = await fetch("http://localhost:3000/", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/"
          }
        });

        const data = await response.json();
        return data;
      }
      fetchBooks()
        .then(function(response) {
          context.commit("retreiveBook", { booksInfo: response });
        })
        .catch(error => console.log(error));
    },

    getUserBook(context, { api }) {
      const userDetails = {
        email: api.fetch.email, //CHECK THIS
        pass: api.fetch.password
      };

      if (!userDetails) {
        return;
      }
      async function fetchBooks() {
        const response = await fetch(
          "http://localhost:3000/account/myReadingList",
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:3000/"
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(userDetails)
          }
        );

        const data = await response.json();
        return data;
      }
      fetchBooks()
        .then(function(response) {
          context.commit("bookList", { list: response });
        })
        .catch(error => console.log(error));
    },

    getBookById(context, { id }) {
      async function fetchBooks() {
        const response = await fetch(`http://localhost:3000/${id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/"
          }
        });

        const data = await response.json();
        return data;
      }
      fetchBooks()
        .then(function(response) {
          console.log("response", response);
          context.commit("retreiveBookById", { bookInfo: response });
        })
        .catch(error => console.log(error));
    },

    addToList({ id, api }) {
      const userDetails = {
        email: api.fetch.email, //CHECK THIS
        pass: api.fetch.password
      };

      async function add2List() {
        const response = await fetch(`http://localhost:3000/account/${id}`, {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/"
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(userDetails)
        });

        const data = await response.json();
        return data;
      }
      return add2List;
    },

    removeFromList({ id, api }) {
      const userDetails = {
        email: api.fetch.email, // CHECK THIS
        pass: api.fetch.password
      };

      async function removeBook() {
        const response = await fetch(
          `http://localhost:3000/account/remove/${id}`,
          {
            method: "PATCH",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:3000/"
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(userDetails)
          }
        );

        const data = await response.json();
        return data;
      }
      return removeBook;
    },

    registerUser(context, { credentials, api }) {
      const userDetails = {
        username: credentials.name,
        email: credentials.email,
        pass: credentials.password
      };

      console.log("userDetails", userDetails)

      async function register() {
        const response = await fetch(`http://localhost:3000/account/signup`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/"
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(userDetails)
        });

        const data = await response.json();
        return data;
      }
      register()
        .then(function(response) {
          api.save(userDetails); //CHECK THIS
          console.log("register response", response)
          context.commit("registered", { email: response });
        })
        .catch(error => console.log(error));
    },

    signInUser(context, { credentials, api }) {

      const userDetails = {
        email: credentials.email,
        pass: credentials.password
      };

      console.log("username", credentials)

      async function signIn() {
        const response = await fetch(`http://localhost:3000/account/signin`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/"
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(userDetails)
        });

        const data = await response.json();
        return data;
      }
      signIn()
        .then(function(response) {
          api.save(userDetails); //CHECK THIS
          context.commit("signin", { signedIn: response });
          console.log("response", response)
        })
        .catch(error => console.log(error));
    },

    setRate(context, { rate, id }) {
      async function setUserRate() {
        const bookRating = {
          rating: rate
        }

        console.log("bookRating", bookRating)
        const response = await fetch(`http://localhost:3000/${id}/rating`, {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/"
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer,
          body: JSON.stringify(bookRating)
        });

        const data = await response.json();
        return data;
      }

      setUserRate()
        .then(function(response) {
          console.log("response", response)
          return response;
        })
        .catch(error => console.log(error));
    }
  },
  modules: {}
});
