<template>
    <div id="app">
      <v-navigation-drawer v-show="$store.state.isShow"
  stateless
      value="true"
    >
      <v-list d-flex>
        <v-list-group
          value="true"
          active-class="de"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Профили</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-card
      class="mx-auto"
      max-width="300"
      tile
      height="90vh"
    >
      <v-list dense rounded>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
        <router-link to="/" style="text-decoration:none; " >
          <v-list-item ref='list1' 
          
        >
            <v-list-item-icon>
            <v-icon v-text="'mdi-check-circle'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'Все'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/Checked" style="text-decoration:none; ">
          <v-list-item ref='list2' 
          >
          
            <v-list-item-icon>
            <v-icon v-text="'mdi-check-circle'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'Обработанные'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/noChecked" style="text-decoration:none">
          <v-list-item ref='list3' 
          >
          
            <v-list-item-icon>
            <v-icon v-text="'mdi-alert-circle'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'Не обработанные'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        </v-list-item-group>
      </v-list>
    </v-card>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
    export default {
     
     } 


      
    
    
</script>

