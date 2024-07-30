<template>
    <div>
        <div>
            <v-dialog v-model="$store.state.isAdd" width="600">
                <v-card style="padding:20px;">
                    <v-text-field outlined v-model="$store.state.newUser.firstName" label="Имя"></v-text-field>
                    <v-text-field outlined v-model="$store.state.newUser.lastName" label="Фамилия"></v-text-field>
                    <v-text-field outlined v-model="$store.state.newUser.company" label="Компания"></v-text-field>
                    <v-text-field outlined v-model="$store.state.newUser.jobTitle"
                        label="Специальность"></v-text-field>
                    <v-text-field outlined v-model="$store.state.newUser.phone" label="Телефон"></v-text-field>
                    <v-text-field outlined v-model="$store.state.newUser.email" label="E-mail"></v-text-field>
                    <v-text-field outlined v-model="$store.state.newUser.interests"
                        label="Интересы"></v-text-field>
                    <v-select v-model="$store.state.newUser.status" :items="statuses" label="Обработанный/Не обработанный"></v-select>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="$store.dispatch('addNewUser')">Добавить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            statuses: [true, false]
        }
    }
}
</script>
