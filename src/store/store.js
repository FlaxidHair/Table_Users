import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router/router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFind: false,
    fName: "",
    lName: "",
    company: "",
    jobTitle: "",
    phone: "",
    email: "",
    interest: "",
    newUser: {
      firstName: "",
      lastName: "",
      company: "",
      jobTitle: "",
      phone: "",
      email: "",
      interests: "",
      status: "",
    },
    findedPerson: [],
    items: [],
    activeItems: [],
    unActiveItems: [],
    selected: [],
    isEdit: false,
    isAdd: false,
    deleteItem: null,
    editItem: null,
    isShow: true,
    actionsSelect: null,
    itemChoose: ["Изменить", "Удалить", "Добавить"],
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
  },
  getters: {
    getNewUser(state) {
      return state.newUser;
    },
    getEditItem(state) {
      return state.editItem;
    },
    getUserss(state) {
      return state.items;
    },
    getUserFinded(state) {
      return state.findedPerson;
    },
    getUserssActive(state) {
      return state.activeItems;
    },
    getUserssUnActive(state) {
      return state.unActiveItems;
    },
    getId(state) {
      return state.deleteItem;
    },
    takeInfo(state) {
      return {
        fName: state.fName,
        lName: state.lName,
        company: state.company,
        jobTitle: state.jobTitle,
        phone: state.phone,
        email: state.email,
        interest: state.interest,
      };
    },
  },
  mutations: {
    isShowingSearch(state) {
      this.getters.takeInfo != ""
        ? (state.isFind = true)
        : (state.isFind = false);
    },
    refreshFind(state) {
      state.isFind = false;
    },
    clearSearch(state) {
      state.fName = "";
      state.lName = "";
      state.company = "";
      state.jobTitle = "";
      state.phone = "";
      state.email = "";
      state.interest = "";
      state.isFind = false;
    },
    AddClear(state) {
      state.newUser.firstName = "";
      state.newUser.lastName = "";
      state.newUser.company = "";
      state.newUser.jobTitle = "";
      state.newUser.phone = "";
      state.newUser.email = "";
      state.newUser.interests = "";
      state.newUser.status = false;
    },
    setUser(state, payload) {
      state.items = payload;
    },
    payloadActiveUsers(state, payload) {
      state.activeItems = payload;
    },
    payloadInActiveUsers(state, payload) {
      state.unActiveItems = payload;
    },
    finded(state, payload) {
      state.findedPerson = payload;
    },
    isShowing(state) {
      state.isShow === true ? (state.isShow = false) : (state.isShow = true);
    },
    rowClick(state, el) {
      if (state.selected.includes(el) != el) {
        state.selected.splice(0, 1);
        state.selected.push(el);
      }
      state.selected.forEach((el) => {
        state.deleteItem = el.id;
        state.editItem = el;
      });
    },
    actionsChange(state, el) {
      if (el === "Удалить") {
        if (state.selected.length > 0) {
          this.dispatch("deleteUsers");
        }
      }
      if (el === "Изменить") {
        if (state.selected.length > 0) {
          state.isEdit = true;
        }
      }
      if (el === "Добавить") {
        state.isAdd = true;
      }
    },
  },

  actions: {
    getActiveUsers(context) {
      axios
        .get("https://retoolapi.dev/1KJKFH/data?status=true")
        .then((response) => context.commit("payloadActiveUsers", response.data))
        .catch((error) => console.log(error));
      this.commit("refreshFind");
    },
    getInactiveUsers(context) {
      axios
        .get("https://retoolapi.dev/1KJKFH/data?status=false")
        .then((response) =>
          context.commit("payloadInActiveUsers", response.data)
        )
        .catch((error) => console.log(error));
      this.commit("refreshFind");
    },
    getUsers(context) {
      axios
        .get("https://retoolapi.dev/1KJKFH/data")
        .then((response) => {
          context.commit("setUser", response.data);
        })
        .catch((error) => console.log(error));
      this.commit("refreshFind");
    },
    addNewUser(state) {
      if (Object.values(state.getters.getNewUser).includes("")) {
        return;
      } else {
        axios
          .post("https://retoolapi.dev/1KJKFH/data", state.getters.getNewUser)
          .then((response) => {
            if (response.status == 201) {
              if (router.history.current.name == "checked") {
                state.dispatch("getActiveUsers");
              }
              if (router.history.current.name == "main") {
                this.commit("AddClear");
                state.dispatch("getUsers");
              }
              if (router.history.current.name == "noChecked") {
                this.commit("AddClear");
                state.dispatch("getInactiveUsers");
              }
            }
          })
          .catch((error) => console.log(error));
        alert("Пользователь добавлен");
      }
    },
    deleteUsers(state) {
      axios
        .delete(`https://retoolapi.dev/1KJKFH/data/${state.getters.getId}`)
        .then((response) => {
          alert("Пользователь удален");
          if (response.status == 200) {
            if (router.history.current.name == "main") {
              state.dispatch("getUsers");
            }
            if (router.history.current.name == "checked") {
              state.dispatch("getActiveUsers");
            }
            if (router.history.current.name == "noChecked") {
              state.dispatch("getInactiveUsers");
            }
          }
        })
        .catch((error) => console.log(error));
    },
    editUsers(state) {
      axios
        .patch(
          `https://retoolapi.dev/1KJKFH/data/${state.getters.getId}`,
          state.getters.getEditItem
        )
        .then((response) => {
          response.status == 200 ? alert("Пользователь изменен") : null;
        });
    },
    findUsers(context) {
      this.commit("isShowingSearch");
      axios
        .get(
          `${
            this.getters.takeInfo.fName
              ? "//retoolapi.dev/1KJKFH/data?firstName=" +
                this.getters.takeInfo.fName
              : this.getters.takeInfo.lName
              ? "//retoolapi.dev/1KJKFH/data?lastName=" +
                this.getters.takeInfo.lName
              : this.getters.takeInfo.company
              ? "//retoolapi.dev/1KJKFH/data?company=" +
                this.getters.takeInfo.company
              : this.getters.takeInfo.jobTitle
              ? "//retoolapi.dev/1KJKFH/data?jobTitle=" +
                this.getters.takeInfo.jobTitle
              : this.getters.takeInfo.phone
              ? "//retoolapi.dev/1KJKFH/data?phone=" +
                this.getters.takeInfo.phone
              : this.getters.takeInfo.email
              ? "//retoolapi.dev/1KJKFH/data?email=" +
                this.getters.takeInfo.email
              : this.getters.takeInfo.interest
              ? "//retoolapi.dev/1KJKFH/data?interests=" +
                this.getters.takeInfo.interest
              : "//retoolapi.dev/1KJKFH/data"
          }`
        )
        .then((response) => context.commit("finded", response.data));
    },
  },
});
