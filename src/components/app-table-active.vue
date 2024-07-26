<template>

    <div >
      <v-responsive>  

            <v-app-bar-title>
                Обработанные
                <v-btn icon>
                <v-icon color="blue">refresh</v-icon>
                </v-btn></v-app-bar-title>
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
        <v-data-table 
      :headers="headers"
      :items="desserts"
      :no-data-text="noDataText"
      class="elevation-4 " 
      height="70vh"
    >
    
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{   }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
        
      </template>
    </v-data-table>
    </v-responsive>
    </div>
</template>

<script>
    export default {
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
            } 
        },
    }
</script>

