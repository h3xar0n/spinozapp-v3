<template>
  <div>
    <div class="book-nav">
        <b-button to='/reader/book1'>Book 1</b-button>
        <b-button to='/reader/book2'>Book 2</b-button>
        <b-button>Book 3</b-button>
        <b-button>Book 4</b-button>
        <b-button>Book 5</b-button>
    </div>
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
