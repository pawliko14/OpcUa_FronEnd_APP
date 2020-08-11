import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
// new Vue({
//   el: "#app",
//   vuetify: new Vuetify(),
//   data: () => ({
//     value: [423, 446, 675, 510, 590, 610, 760]
//   })
// });
