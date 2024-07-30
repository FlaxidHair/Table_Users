<template>
<div id="app">
  <v-app id="inspire">
    <div>
  <Appbar></Appbar>
  <div style="padding:20px; position:absolute;display:flex;left:50%;transform:translate(-50%);">
    <EditInput></EditInput>
  </div>
  
  <div style="display:flex;">
    
<AppAside></AppAside>
<router-view></router-view>

  </div>
  
</div>

  </v-app>
  
</div>

</template>

<script>
import Appbar from'./components/app-bar.vue'
import AppAside from'./components/app-aside.vue'
import EditInput from'./components/Edit-Input.vue'
export default {
  name:'App',
  components:{
    Appbar,AppAside,EditInput
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
