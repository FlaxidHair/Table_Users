import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import store from "./store/store";
import axios from "axios";
Vue.config.productionTip = false;

Vue.prototype.axios = axios;

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
