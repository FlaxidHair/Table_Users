import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nameHeaders: [
      { text: "Все", icon: "mdi-check-circle" },
      { text: "Обработанные", icon: "mdi-check-circle" },
      { text: "Не обработанные", icon: "mdi-alert-circle" },
    ],
    itemsInnerStatus: [
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
    itemsInner: [
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
    activeItems: [],
    unActiveItems: [],
    actionsTable: [
      {
        title: "Добавить",
      },
    ],
    selected: [],
    isShow: false,
  },
  getters: {
    getUserss(state) {
      return state.items;
    },
    getUserssActive(state) {
      state.activeItems = state.items.filter((el) => {
        return el.status == true;
      });
      return state.activeItems;
    },
    getUserssUnActive(state) {
      state.unActiveItems = state.items.filter((el) => {
        return el.status == false;
      });

      return state.unActiveItems;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.items = payload;
    },
    reloadUI() {
      console.log(this.$refs.table);
    },
    isShowing(state) {
      state.isShow === true ? (state.isShow = false) : (state.isShow = true);
    },
  },
  actions: {
    getUsers(context) {
      axios
        .get("https://retoolapi.dev/D6xLg4/data")
        .then((response) => context.commit("setUser", response.data));
    },
  },
});
