<template>
<div id="app">
  <v-app id="inspire">
    <div>
    <v-toolbar dark color="primary" flex-grow-0>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon >
        <v-icon style="width:30px;height:30px;" class="white rounded-circle" color="#0F4C82">search</v-icon>
      </v-btn> 
    </v-toolbar>
  </div>
  <div style="display:flex;">
  <v-navigation-drawer
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
    >
      <v-list dense>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  <div>
    <v-container fluid style="width:85vw;">
      <v-container d-flex justify-space-between>
      <v-toolbar-title >{{}}<v-btn icon>
                <v-icon color="blue">refresh</v-icon>
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
      :headers="headers"
      :items="desserts"
      class="elevation-3"
      height="80vh" 
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </v-container>
  </div>
</div>
  </v-app>
</div>
</template>

<script>
// import Appbar from'./components/app-bar.vue'
// import TableActive from'./components/app-table-active.vue'
// import AppAside from'./components/app-aside.vue'
export default {
  name:'App',
  // components:{
  //   Appbar,TableActive,AppAside
  // }
  data(){
            return {
               headers:[{
                text: 'Имя',
                sortable:false,
               },{
                text: 'Фамилия',
                sortable:false,
               },{
                text: 'Компания',
                sortable:false,
               },{
                text: 'Специальность',
                sortable:false,
               },{
                text: 'Телефон',
                sortable:false,
               },{
                text: 'E-mail',
                sortable:false,
               },{
                text: 'Интересы',
                sortable:false,
               }],
               noDataText:'Нет пользователей',
               items: [
        { text: 'Все', icon: 'mdi-check-circle' },
        { text: 'Обработанные', icon: 'mdi-check-circle' },
        { text: 'Не обработанные', icon: 'mdi-alert-circle' },
      ],
            } 
        },
}
</script>
