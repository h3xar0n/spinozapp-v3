<script>
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      appHeader: Header,
    }
  }
</script>

<template>
  <div id="app">
    <app-header />
    <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition>   
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

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  
  @import './assets/css/styles.css';
</style>
