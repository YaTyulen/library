<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const route = useRoute()
</script>

<template>
  <h2> Книга {{ route.params.title }}</h2>

</template>

<style scoped></style>
