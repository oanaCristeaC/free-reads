<template>
  <b-container class="bv-example-row mx-auto reading-list-container">
    <b-row class="row" cols="12">
      <b-col cols="12" class="register-container">
        <div class="rounded flex-container">
          <h5>REGISTER</h5>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4"> </b-form-group>
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
              <b-form-text id="password-help-block">
                *Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: null
      }
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();

      return this.$store.dispatch("registerUser", {
        credentials: this.form,
        api: this.$api
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = null;
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

.register-container {
  display: flex;
  padding: 15px;
  border: 1px solid #cdcdcd;
  background-color: #fff;
  box-shadow: 10px 10px 18px #888888;
}
</style>
