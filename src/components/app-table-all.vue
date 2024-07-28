<template>
    <div>
        <v-container fluid style="width:85vw;">
      <v-container d-flex justify-space-between>
      <v-toolbar-title >Все<v-btn icon @click="$store.commit('reloadUI')">
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
      </v-menu>
      <h4 v-for="item in $store.state.selected" :key="item">
        {{ item }}
      </h4>
    </v-container>
      <v-data-table
      :headers="$store.state.itemsInnerStatus"
      :items="$store.getters.getUserss"
      :items-per-page="5"
      class="elevation-1"
      v-model="$store.state.selected"
      @click:row="$store.commit('rowClick',$event
      )"
    >
      <template v-slot:[`item.status`]="{ item }" >
        <div v-if="item.status==true">
          <v-icon color="blue">mdi-cloud-check</v-icon>
        </div>
        <div v-if="item.status==false">
          <v-icon color="red">mdi-cloud-off-outline</v-icon>
        </div>
      </template>
  </v-data-table>
  <v-btn @click="$store.dispatch('postUsers')">123</v-btn>
  </v-container>
    </div>
</template>

<script>
    export default {

    }
</script>

