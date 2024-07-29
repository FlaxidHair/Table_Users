<template>
<div id="app">
  <v-app id="inspire">
    <div>
  <Appbar></Appbar>
  <div style="display:flex;">
<AppAside></AppAside>
<router-view></router-view>

  </div>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>
      
  </v-dialog>
</div>

  </v-app>
  
</div>

</template>

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
        data(){
          return {
            dialog:false,
          }
        }
  
}
</script>
