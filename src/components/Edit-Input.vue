<template>
    <div>
        <div>
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
                        <v-btn color="primary" @click="$store.dispatch('editUsers')">Сохранить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
