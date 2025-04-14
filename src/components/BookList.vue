<script setup>
import { mdiBook } from '@mdi/js';
defineProps({

})

import { ref } from 'vue'

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
  item.props = {prependIcon: 'mdi-book'}
  return item
})

console.log(bookItems);

const userControls = [
    { title: 'Content filtering', subtitle: 'Set the content filtering level to restrict appts that can be downloaded' },
    { title: 'Password', subtitle: 'Require password for purchase or use password to restrict purchase' },
  ]

  const settingsItems = [
    { value: 'notifications', title: 'Notifications', subtitle: 'Notify me about updates to apps or games that I downloaded' },
    { value: 'sound', title: 'Sound', subtitle: 'Auto-update apps at any time. Data charges may apply' },
    { value: 'widgets', title: 'Auto-add widgets', subtitle: 'Automatically add home screen widgets when downloads complete' },
  ]

const settingsSelection = ref([])
const favourites = ref([])

</script>

<template>
<div>Список книг</div>
  <ul>
    <v-list
      v-model:selected="favourites"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-item
        v-for="book in bookItems"
        :key="book.value"
        :subtitle="book.author"
        :title="book.title"
        :value="book.value"
      >
        <template v-slot:prepend="{ selected }">
          <v-list-item-action start>
            <v-checkbox :model="selected" label="book.title" value="book"></v-checkbox>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </ul>
</template>

<style scoped>

</style>
