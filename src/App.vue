<template>
<div id="app">
  <v-app id="inspire">
    <div>
  <Appbar></Appbar>
  <div style="display:flex;">
<AppAside></AppAside>
<router-view></router-view>

  </div>
</div>

  </v-app>
  
</div>

</template>+3

<script>
import Appbar from'./components/app-bar.vue'
import AppAside from'./components/app-aside.vue'
export default {
  name:'App',
  components:{
    Appbar,AppAside
  },
  mounted() {
           this.$store.dispatch('getUsers')
        },
}
</script>
