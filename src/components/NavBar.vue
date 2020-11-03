<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/" class="logo">FREE Reads</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-form-select dropdown v-model="selected" :options="options"></b-form-select>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search..."></b-form-input>
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
          </b-nav-form>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em> <b-icon icon="person-fill"></b-icon></em> User
            </template>
            <b-dropdown-item href="/account">Register</b-dropdown-item>
            <b-dropdown-item href="/login-logout">Login</b-dropdown-item>
            <b-dropdown-item href="/my-list">My List</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "NavBar",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Select" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ]
    };
  }
};
</script>
<style>
.navbar-dark {
  background-color: #b0defa !important;
}

a {
  color: #5c5b5e !important;
}

.logo {
  font-size: 18px;
  font-weight: 700;
  color: white !important;
}

.custom-select {
  width: 50%;
}

.input-group-text {
  background-color: #b0defa !important;
  border: none !important;
}
</style>
