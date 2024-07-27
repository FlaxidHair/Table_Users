import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headers: [
      {
        text: "Имя",
        sortable: false,
      },
      {
        text: "Фамилия",
        sortable: false,
      },
      {
        text: "Компания",
        sortable: false,
      },
      {
        text: "Специальность",
        sortable: false,
      },
      {
        text: "Телефон",
        sortable: false,
      },
      {
        text: "E-mail",
        sortable: false,
      },
      {
        text: "Интересы",
        sortable: false,
      },
    ],
    nameHeaders: [
      { text: "Все", icon: "mdi-check-circle" },
      { text: "Обработанные", icon: "mdi-check-circle" },
      { text: "Не обработанные", icon: "mdi-alert-circle" },
    ],
    items: [],
  },
  getters: {
    getUserss(state) {
      return state.items;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    getUsers(context) {
      axios
        .get("https://retoolapi.dev/D6xLg4/data")
        .then((response) => context.commit("setUser", response.data));
    },
  },
  modules: {},
});
