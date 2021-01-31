<template>
  <div class="home">
    <app-bar />
    <background />
    <search-bar />
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import Background from '../components/Background.vue'
import SearchBar from '../components/SearchBar.vue'


export default {
  name: 'Home',
  components: {
    AppBar,
    Background,
    SearchBar,
  }
}
</script>

<style>
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
}
</style>