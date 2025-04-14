<script setup>
import AddBookForm from '@/components/AddBookForm.vue';

</script>

<template>
  <div class="add-book-container">
    <AddBookForm />
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .add-book-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
