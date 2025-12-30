<template>
  <div id="app">
    <LoadingScreen />
    <ThemeSelector />
    <router-view />
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'
import ThemeSelector from './components/ThemeSelector.vue'

export default {
  name: 'App',
  components: {
    LoadingScreen,
    ThemeSelector
  }
}
</script>

<style>
/* Global styles are in main.css */
body.loading-active {
  overflow: hidden;
}
</style>

