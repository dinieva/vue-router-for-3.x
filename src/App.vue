<template>
  <div id="app">
  <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> <!--Именованный маршрут  -->
      <router-link to="/about">About</router-link>
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
