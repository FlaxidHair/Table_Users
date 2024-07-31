<template>
  <div>
    <v-toolbar dark color="primary" flex-grow-0>
      <v-app-bar-nav-icon @click="$store.commit('isShowing')"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="text-xs-center">
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200"  offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" >
              <v-icon style="width:30px;height:30px;" class="white rounded-circle" color="#0F4C82">search</v-icon>
            </v-btn>
          </template>
          <div>
            <v-card class="pa-5 d-flex flex-column" width="430px" height="90vh">
              <v-list class="mb-auto">
                <v-list-tile>
                  <v-list-tile-content>
                    <v-text-field dense outlined v-model="$store.state.fName" label="Имя"></v-text-field>
                    <v-text-field dense outlined v-model="$store.state.lName" label="Фамилия"></v-text-field>
                    <v-text-field dense outlined v-model="$store.state.company" label="Компания"></v-text-field>
                    <v-text-field dense outlined v-model="$store.state.jobTitle" label="Специальность"></v-text-field>
                    <v-text-field dense outlined v-model="$store.state.phone" label="Телефон"></v-text-field>
                    <v-text-field dense outlined v-model="$store.state.email" label="E-mail"></v-text-field>
                    <v-text-field dense outlined v-model="$store.state.interest" label="Интересы"></v-text-field>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-card-actions class="d-flex align-end">
                <v-spacer></v-spacer>
                <v-btn flat @click="$store.commit('clearSearch')">Очистить</v-btn>
                <v-btn color="primary" flat @click="$store.dispatch('findUsers')">Применить</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-menu>
      </div>


    </v-toolbar>
  </div>
</template>

<script>
export default {

}

</script>
