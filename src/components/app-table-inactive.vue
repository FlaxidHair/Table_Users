<template>
    <div>
        <v-container fluid style="width:85vw;">
      <v-container d-flex justify-space-between>
      <v-toolbar-title >Не обработанные<v-btn icon @click="$store.commit('reloadUI')">
                <v-icon color="blue" >refresh</v-icon>
                </v-btn></v-toolbar-title>
                
                <!-- <v-menu offset-y>
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
          <v-list-item >
            <v-list-item-title v-text="123"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
      <v-row>
        <v-col
          class="d-flex"
          cols="4"
          sm="2"
          
        >
          <v-select
            :items="items"
            label="Действия"
            color="blue"
            v-model="chacn"
          ></v-select>
        </v-col>
  {{ chacn }}
      </v-row>
    </v-container>
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
        data() {
            return{
                items:["Удалить","Добавить","Изменить"],
                chacn:[]
            }
        }
    }
</script>

