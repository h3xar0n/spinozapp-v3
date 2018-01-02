<template>
  <div>
    <router-view />    
  </div>
</template>

<style>
  .card {
    width: 100%
  }

  .book-nav {
    margin-top: 10px;
  }

  .book-nav a {
    background-color: #35495e;
    font-size: 10px;
  }
  .book-nav a:hover, 
  .btn-secondary:not([disabled]):not(.disabled).active {
    color: #35495e;
    background-color: white;
    border: 1px solid #35495e;
    box-shadow: none;
  }
</style>

<script>
</script>