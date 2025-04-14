<script setup>
import { mdiBook } from '@mdi/js';
defineProps({

})

import { ref } from 'vue'
import { RouterLink } from 'vue-router';

let bookList = [{
  id: 1,
  title: "Книга 1",
  author: "Автор 1",
  description: "Описание книги 1",
  year: 1900,
  genre: 'жанр 1',
  coverUrl: '...',
  isFavorite: true,
},
{
  id: 2,
  title: "Книга 2",
  author: "Автор 2",
  description: "Описание книги 2",
  year: 1900,
  genre: 'жанр 2',
  coverUrl: '...',
  isFavorite: true,
},
{
  id: 3,
  title: "Книга 3",
  author: "Автор 3",
  description: "Описание книги 3",
  year: 1900,
  genre: 'жанр 3',
  coverUrl: '...',
  isFavorite: true,
},
{
  id: 4,
  title: "Книга 4",
  author: "Автор 4",
  description: "Описание книги 4",
  year: 1900,
  genre: 'жанр 4',
  coverUrl: '...',
  isFavorite: true,
}]

let bookItems = bookList.map((item) => {
  item.value = item.id
  item.props = { prependIcon: 'mdi-book' }
  return item
})

console.log(bookItems);

const favourites = ref([])

const goToAddBook = () => {
  this.$router.push('/add-book')
}

</script>

<template>
  <div class="book-list-container">
    <h2>Список книг</h2>
    <RouterLink to="/add-book">
      <v-btn prepend-icon="$add">
        <v-icon icon="$mdiBook"></v-icon>
        Добавить книгу
      </v-btn>
    </RouterLink>


    <ul class="book-list">
      <v-list v-model:selected="favourites" lines="three" select-strategy="leaf">
        <v-list-item v-for="book in bookItems" :key="book.value" :subtitle="book.author" :title="book.title"
          :value="book.value">
          <template v-slot:prepend="{ selected }">
            <v-list-item-action start>
              <v-checkbox :model="selected" :label="book.title" :value="book"></v-checkbox>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>
    </ul>
  </div>

</template>

<style scoped>
.book-list-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.v-btn {
  width: 100%;
}
</style>
