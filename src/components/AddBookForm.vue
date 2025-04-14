<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const saveNewBook = () => {

}

</script>

<template>
  <h2>Добавить книгу</h2>
  <form>
    <v-text-field label="Название книги" variant="outlined"></v-text-field>
    <v-text-field label="Автор" variant="outlined"></v-text-field>
    <v-text-field label="Описание" variant="outlined"></v-text-field>
    <v-text-field label="Год издания" variant="outlined"></v-text-field>
    <v-text-field label="Жанр" variant="outlined"></v-text-field>
    <v-text-field label="Ссылка на книгу" variant="outlined"></v-text-field>
  </form>
  <RouterLink to="/">
    <v-btn @click="saveNewBook"> Добавить </v-btn>
  </RouterLink>

</template>

<style scoped>
.v-btn {
  width: 100%;
}
</style>
