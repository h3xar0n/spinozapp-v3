<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 65px;
  min-height: 100vh;
  background-color: #fdf3f3;
}

html {
  font-family: 'Source Sans Pro', sans-serif !important;
}
</style>
