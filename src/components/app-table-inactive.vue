<template>
  <div>
    <v-container fluid style="width:84vw;" elevation-2 class="mt-3">
      <v-container d-flex justify-space-between rounded>
        <v-toolbar-title>Не обработанные
          <v-btn icon @click="$router.go(0)">
            <v-icon color="primary">refresh</v-icon>
          </v-btn>
        </v-toolbar-title>
        <v-row justify="end">
          <v-col class="d-flex" sm="2">
            <v-select filled label="Действия" v-model="$store.state.actionsSelect" :items="$store.state.itemChoose"
              background-color="primary" color="primary" style="height:50px;">
              <template v-slot:item="{ item }">
                <div style="padding: 10px 45px 10px 45px" @click="$store.commit('actionsChange', item)">
                  {{ item }}
                </div>
              </template>
            </v-select>
          </v-col>
        </v-row>
      </v-container>
      {{ $store.state.actionsSelect }}
      <div v-if="!$store.state.isFind">
        <v-data-table height="70vh" :headers="$store.state.itemsInner" :items="$store.getters.getUserssUnActive"
          :items-per-page="5" v-model="$store.state.selected" @click:row="$store.commit('rowClick', $event)">
        </v-data-table>
      </div>
      <div v-if="$store.state.isFind">
        <v-data-table height="70vh" :headers="$store.state.itemsInner" :items="$store.getters.getUserFinded"
          :items-per-page="5" v-model="$store.state.selected" @click:row="$store.commit('rowClick', $event
          )">
        </v-data-table>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {

};
</script>
