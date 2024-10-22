<script setup lang="ts">
import FlyingToasters from "./components/FlyingToasters/FlyingToasters.vue";
import Header from "./components/Header/Header.vue";
import SiteNavigation from "./components/SiteNavigation/SiteNavigation.vue";
import SiteContent from "./components/SiteContent/SiteContent.vue";
</script>

<template>
  <FlyingToasters />
  <Header />
  <SiteNavigation />
  <SiteContent>
    <!-- <p>Example content</p> -->
  </SiteContent>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
