import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books', () => {
  const books = ref([])
  // const doubleCount = computed(() => count.value * 2)

  const updateBooks = computed((list) => {
    const b = fetch()
    console.log(b);

    books.value = list
    return books
  })

  // function increment() {
  //   count.value++
  // }

  // function getBooks() {

  // }

  return { books, updateBooks}
})
