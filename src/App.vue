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
  data () {
    return {
      timeout: null,
    }
  },
  components: {
    Appbar,
    AppAside,
    EditInput,
    AddInput,
  },
  methods: {
    generateToken () {
      const token = Math.random().toString(36).substr(2,9)
      this.setCookie('userToken', token, 1)
    },
    setCookie(name,value,day) {
      const expires = new Date(Date.now() + day * (1000*60*60*24))
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`
    },
    deleteCookie(name) {
      this.setCookie(name,'',-1)
    },
    resetTimer () {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.deleteCookie('userToken')
        if (this.$route.path !== '/unknown') {
          this.$router.push('/unknown')
        }

      }, 10000)
    }
  },
  mounted () {
    this.generateToken()
    this.resetTimer()

    window.addEventListener('mousemove', this.resetTimer);
    window.addEventListener('keydown', this.resetTimer);
    window.addEventListener('scroll', this.resetTimer);
    window.addEventListener('click', this.resetTimer);
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.resetTimer);
    window.removeEventListener('keydown', this.resetTimer);
    window.removeEventListener('scroll', this.resetTimer);
    window.removeEventListener('click', this.resetTimer);
  }
};
</script>
