import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
//import './custom.scss'
import freereadsStorage  from "@/lib/helpers";

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.prototype.$api = freereadsStorage();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
