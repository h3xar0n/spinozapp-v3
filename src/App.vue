<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }
</script>

<template>
  <div id="app">
    <app-header />
    <router-view class="view" />
    <app-footer/>
  </div>
</template>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  @import './assets/css/styles.css';
</style>
