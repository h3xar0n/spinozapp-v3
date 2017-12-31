<template>
  <div id="app">
    <app-header />
    <router-view class="view" />
    <app-footer/>
  </div>
</template>

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

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 65px;
    background-image: linear-gradient(-180deg,#fff 33%,#fbfbfb 100%);
    min-height: 100%;
  }

  .view {
    padding-bottom: 100px
  }
</style>
