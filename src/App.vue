<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/add-book">Add book</RouterLink>
        <RouterLink to="/info-book">Info book</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
