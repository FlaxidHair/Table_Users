<template>
    <div>
        <v-container fluid style="width:85vw;">
      <v-container d-flex justify-space-between>
      <v-toolbar-title >Не обработанные<v-btn icon @click="$store.commit('reloadUI')">
                <v-icon color="blue" >refresh</v-icon>
                </v-btn></v-toolbar-title>
                <v-menu offset-y>
        <template v-slot:activator="{ on }" >
          <v-btn
            color="primary"
            dark
            v-on="on"
          >
            Действия 
          </v-btn>
        </template>
        <v-list> 
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            @click="stop"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu></v-container>
      <v-data-table
      :headers="$store.state.itemsInner"
      :items="$store.getters.getUserssUnActive"
      :items-per-page="5"
      class="elevation-1"
    >

  </v-data-table>
  </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

