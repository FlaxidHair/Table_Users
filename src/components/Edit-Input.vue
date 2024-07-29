<template>
    <div>

        <v-card style="width:600px;padding:40px; ">
        <v-form d-flex>
                  <v-text-field outlined v-model="$store.getters.getEditItem.firstName" label="Имя"></v-text-field>
                  <v-text-field outlined v-model="$store.getters.getEditItem.lastName" label="Фамилия"></v-text-field>
                  <v-text-field outlined v-model="$store.getters.getEditItem.company" label="Компания"></v-text-field>
                  <v-text-field outlined v-model="$store.getters.getEditItem.jobTitle" label="Специальность"></v-text-field>
                  <v-text-field outlined v-model="$store.getters.getEditItem.phone" label="Телефон"></v-text-field>
                  <v-text-field outlined v-model="$store.getters.getEditItem.email" label="E-mail"></v-text-field>
                  <v-text-field outlined v-model="$store.getters.getEditItem.interests" label="Интересы"></v-text-field>
                  <v-btn color="primary" @click="$store.dispatch('editUsers')">Сохранить</v-btn>
                  {{$store.getters.getEditItem}}
                </v-form>
                
        </v-card>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                methods:{

                }
            }
        }
    }
</script>
