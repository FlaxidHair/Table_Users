<template>
<div id="app">
  <v-app id="inspire" >
<Appbar></Appbar>
<AppAside></AppAside>
<TableActive></TableActive>

</v-app>
</div>
</template>

<script>
import Appbar from'./components/app-bar.vue'
import TableActive from'./components/app-table-active.vue'
import AppAside from'./components/app-aside.vue'
export default {
  name:'App',
  components:{
    Appbar,TableActive,AppAside
  }
}
</script>
