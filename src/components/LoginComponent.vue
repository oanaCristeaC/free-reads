<template>
  <b-container class="bv-example-row mx-auto reading-list-container">
    <b-row class="row" cols="12">
      <b-col cols="12" class="login-container">
        <div class="rounded flex-container">
          <h5 v-if="isLogedin">LOGIN</h5>
          <h5 v-else>LOGOUT</h5>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description=""
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>
            <b-form-group @submit.stop.prevent>
              <label for="text-password">Password</label>
              <b-input
                type="password"
                id="text-password"
                v-model="form.password"
                required
                placeholder="Enter password"
                aria-describedby="password-help-block"
              ></b-input>
              <b-form-text id="password-help-block"> </b-form-text>
            </b-form-group>
            <!-- <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="me">Keep me signed in</b-form-checkbox>
            </b-form-checkbox-group> -->
            <br />
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "login-component",
  data() {
    return {
      form: {
        email: "",
        password: null,
      },
      show: true
    };
  },
  computed: {
    isLogedin: function() {
    const isLoged = this.$store.dispatch({ api: this.$api });
    console.log("isLoged", isLoged)
    return false
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const logedin = this.$store.dispatch("signInUser", {
        credentials: this.form,
        api: this.$api
      });
      if (logedin) {
        this.onReset()
        location.href = location.origin
      } else {
        console.log("false")
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      //this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
.row {
  margin: 15px 0;
  padding: 10px;
}

.btn:not(:disabled):not(.disabled) {
  color: white !important;
  background-color: #43ab61;
}
h5 {
  text-align: center;
  padding-top: 20px;
  color: #5c5b5e;
  font-weight: 400;
}

.login-container {
  display: flex;
  padding: 15px;
  border: 1px solid #cdcdcd;
  background-color: #fff;
  box-shadow: 10px 10px 18px #888888;
}
</style>
