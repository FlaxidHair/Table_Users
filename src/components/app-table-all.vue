<template>
    <div>
        <v-container fluid style="width:85vw;">
      <v-container d-flex justify-space-between>
      <v-toolbar-title >Все<v-btn icon @click="$router.go(0)">
                <v-icon color="blue" >refresh</v-icon>
                </v-btn></v-toolbar-title>
                <v-row justify="end">
                <v-col
          class="d-flex"
          sm="2"
        >
          <v-select
          filled
            label="Действия"
            v-model="$store.state.actionsSelect"
            :items="$store.state.itemChoose"
            background-color="blue"
            color="blue"
            style="height:50px;"
          >  
          <template v-slot:item="{ item }">
      <div style="padding:10px 45px 10px 45px;" @click="$store.commit('actionsChange',item)">{{ item }}</div>
    </template>
        </v-select>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="$store.state.isFind">
      <v-data-table
      :headers="$store.state.itemsInnerStatus"
      :items="$store.getters.getUserS"
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
    </div>
    <div v-else-if="!$store.state.isFind">
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
    </div>
      
  </v-container>
  {{ $store.getters.getUserS }}

    </div>
</template>

<script>
    export default {

    }
</script>

