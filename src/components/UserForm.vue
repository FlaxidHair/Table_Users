<template>
    <!-- <v-form @submit.prevent="submit">
      <v-text-field v-model="user.firstName" label="First Name"></v-text-field>
      <v-text-field v-model="user.lastName" label="Last Name"></v-text-field>
      <v-text-field v-model="user.email" label="Email"></v-text-field>
      <v-select v-model="user.status" :items="statuses" label="Status"></v-select>
      <v-btn type="submit">Save</v-btn>
    </v-form> -->
    <v-form @submit.prevent="submit">
            <v-dialog v-model="$store.state.isEdit" width="600">
                <v-card style="padding:20px;">
                    <v-text-field outlined v-model="$store.getters.getEditItem.firstName" label="Имя"></v-text-field>
                    <v-text-field outlined v-model="$store.getters.getEditItem.lastName" label="Фамилия"></v-text-field>
                    <v-text-field outlined v-model="$store.getters.getEditItem.company" label="Компания"></v-text-field>
                    <v-text-field outlined v-model="$store.getters.getEditItem.jobTitle"
                        label="Специальность"></v-text-field>
                    <v-text-field outlined v-model="$store.getters.getEditItem.phone" label="Телефон"></v-text-field>
                    <v-text-field outlined v-model="$store.getters.getEditItem.email" label="E-mail"></v-text-field>
                    <v-text-field outlined v-model="$store.getters.getEditItem.interests"
                        label="Интересы"></v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" type="submit" @click="$store.dispatch('editUsers')">Сохранить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-form>
  </template>
  
  <script>
  export default {
    props: {
      user: Object,
    },
    data() {
      return {
        statuses: ['active', 'inactive'],
      };
    },
    methods: {
      submit() {
        this.$emit('submit', this.user);
      }
    }
  };
  </script>
      