<template>
  <Header/>
  <main>
    <NuxtPage />
  </main>
</template>

<style lang="scss">
main {
  width: calc(100vw - 16rem - 3rem);
  position: absolute;
  right: 0;
  padding: 3rem;
}
</style>

<script>
import Header from "~/components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  }
}
</script>