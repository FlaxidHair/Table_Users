<template>
<div>
  <v-container fluid style="width:85vw;">
      <v-container d-flex justify-space-between>
      <v-toolbar-title >Обработанные<v-btn icon @click="$store.commit('reloadUI')">
                <v-icon color="blue" >refresh</v-icon>
                </v-btn></v-toolbar-title>
                <v-row>
                <v-col
          class="d-flex"
          cols=""
          sm="2"
          
        >
          <v-select
          outlined
            label="Действия"
            v-model="$store.state.actionsSelect"
            :items="$store.state.itemChoose"
            background-color="blue"
            color="blue"
            placeholder="red"
          >  
          <template v-slot:item="{ item }">
      <div style="padding:10px 45px 10px 45px; color:red;"  @click="$store.commit('actionsChange',item)">{{ item }}</div>
    </template>
        </v-select>
        </v-col>  
      </v-row>
              </v-container>
      <v-data-table ref="table"
      :headers="$store.state.itemsInner"
      :items="$store.getters.getUserssActive"
      :items-per-page="5"
      class="elevation-1"
      v-model="$store.state.selected"
      @click:row="$store.commit('rowClick',$event
      )"
    >

  </v-data-table>
  {{ $store.state.selected }}
  </v-container>
  </div>
</template>

<script>
    export default {

        }

</script>

