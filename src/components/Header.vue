<template>
  <b-navbar toggleable="md" type="dark" class="main-nav">
    <b-navbar-brand to="/">
      <img src="../assets/spinoza-menu.png" alt="" class="spinoza-img"> spinozapp
    </b-navbar-brand>
    <div class="button-group">
      <b-button to="/affects">Affects</b-button>
      <b-button to="/reader">Reader</b-button>
      <b-button to="/graph">Graph</b-button>
    </div>
  </b-navbar>
</template>

<style scoped>
  .spinoza-img {
    height: 60px;
    width: auto;
  }

  a.navbar-brand, a.navbar-brand:focus {
    padding-bottom: 0;
    color: black;
  }

  a.navbar-brand:hover {
    color: #f6be0b;
    background-color: none;
    transition: 0.2s;
  }

  .main-nav {
    position: fixed;
    top: 0;
    width: 100%
  }

  .btn-secondary {
    background: none;
    color: black;
    margin: 10px;
  }

  .btn-secondary:hover {
    color: #f6be0b;
    border-color: #f6be0b;
    background-color: white;
    transition: 0.2s;
  }

  .btn-secondary:not([disabled]):not(.disabled).active {
    background-color:#f6be0b;
    border: 1px solid #f6be0b;
    color: white;
    box-shadow: none;
  }

  nav.navbar.main-nav.navbar-dark.navbar-expand-md {
    z-index: 3;
    padding: 0;
    margin: 0;
    background-color: white;
    box-shadow: 2px 2px #f7f7f7;
  }

  @media (max-width: 400px) {
    .spinoza-img {
      height: 30px;
    }
    a {
      font-size: 10px;
    }
    .btn-secondary {
      margin: 0px;
    }
  }

</style>
