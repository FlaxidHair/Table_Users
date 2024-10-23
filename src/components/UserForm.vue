<template>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="user.firstName" label="First Name"></v-text-field>
      <v-text-field v-model="user.lastName" label="Last Name"></v-text-field>
      <v-text-field v-model="user.email" label="Email"></v-text-field>
      <v-select v-model="user.status" :items="statuses" label="Status"></v-select>
      <v-btn type="submit">Save</v-btn>
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
      