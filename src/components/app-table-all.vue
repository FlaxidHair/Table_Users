<template>
  <div>
    <v-container fluid style="width:85vw;" elevation-2 class="mt-3">
      <v-container d-flex justify-space-between>
        <v-toolbar-title>Все<v-btn icon @click="$store.dispatch('getUsers')">
            <v-icon color="primary">refresh</v-icon>
          </v-btn></v-toolbar-title>
        <v-row justify="end">
          <v-col class="d-flex" sm="2">
            <v-select filled label="Действия" v-model="$store.state.actionsSelect" :items="$store.state.itemChoose"
              background-color="primary" color="primary" style="height:50px;">
              <template v-slot:item="{ item }">
                <div style="padding:10px 45px 10px 45px;" @click="$store.commit('actionsChange', item)">{{ item }}</div>
              </template>
            </v-select>
          </v-col>
        </v-row>
      </v-container>
      <div v-if="$store.state.isFind">
        <v-data-table height="70vh" no-data-text="Нет результатов" :headers="$store.state.itemsInnerStatus"
          :items="$store.getters.getUserFinded" :items-per-page="5" v-model="$store.state.selected" @click:row="$store.commit('rowClick', $event
          )">
          <template v-slot:[`item.status`]="{ item }">
            <div v-if="item.status == true">
              <v-icon color="blue">mdi-cloud-check</v-icon>
            </div>
            <div v-if="item.status == false">
              <v-icon color="red">mdi-cloud-off-outline</v-icon>
            </div>
          </template>
        </v-data-table>
      </div>
      <div v-else-if="!$store.state.isFind">
        <v-data-table expand height="70vh" :headers="$store.state.itemsInnerStatus" :items="$store.getters.getUserss"
          :items-per-page="5" v-model="$store.state.selected" @click:row="$store.commit('rowClick', $event
          )">
          <template v-slot:[`item.status`]="{ item }">
            <div v-if="item.status == true">
              <v-icon color="blue">mdi-cloud-check</v-icon>
            </div>
            <div v-if="item.status == false">
              <v-icon color="red">mdi-cloud-off-outline</v-icon>
            </div>
          </template>
        </v-data-table>
      </div>

    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getUsers");
  }
}
</script>
