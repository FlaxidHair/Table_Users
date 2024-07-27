import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import tableStore from "./tableStore.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nameHeaders: [
      { text: "Все", icon: "mdi-check-circle" },
      { text: "Обработанные", icon: "mdi-check-circle" },
      { text: "Не обработанные", icon: "mdi-alert-circle" },
    ],
    itemsInner: [
      {
        text: "Статус",
        align: "start",
        sortable: false,
        value: "status",
        icon: "status",
      },
      { text: "Имя", align: "start", sortable: false, value: "firstName" },
      { text: "Фамилия", value: "lastName", sortable: false },
      { text: "Компания", value: "company", sortable: false },
      { text: "Специальность", value: "jobTitle", sortable: false },
      { text: "Телефон", value: "phone", sortable: false },
      { text: "E-mail", value: "email", sortable: false },
      { text: "Интересы", value: "interests", sortable: false },
    ],
    noDataText: "Нет пользователей",
    items: [],
  },
  getters: {
    getUserss(state) {
      state.items.forEach((el) => {
        el.status == true ? "1" : "2";
      });
      return state.items;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.items = payload;
    },
    reloadUI() {
      window.location.reload();
    },
  },
  actions: {
    getUsers(context) {
      axios
        .get("https://retoolapi.dev/D6xLg4/data")
        .then((response) => context.commit("setUser", response.data));
    },
  },
  modules: {
    tableStore,
  },
});
