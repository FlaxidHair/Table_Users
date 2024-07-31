<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <Appbar></Appbar>
        <EditInput></EditInput>
        <AddInput></AddInput>
        <v-flex class="d-flex">
          <AppAside class="mr-auto"></AppAside>
          <div class="d-flex justify-end">
            <router-view></router-view>
          </div>
        </v-flex>
      </div>
    </v-app>
  </div>
</template>

<script>
import Appbar from "./components/app-bar.vue";
import AppAside from "./components/app-aside.vue";
import EditInput from "./components/Edit-Input.vue";
import AddInput from "./components/Add-input.vue";
export default {
  name: "App",
  components: {
    Appbar,
    AppAside,
    EditInput,
    AddInput,
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>
