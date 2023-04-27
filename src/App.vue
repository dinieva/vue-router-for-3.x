<template>
  <div id="app">
  <div id="nav">
      <<router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> <!--Именованный маршрут  -->
  </div>
  <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  
};
</script>

<style></style>
