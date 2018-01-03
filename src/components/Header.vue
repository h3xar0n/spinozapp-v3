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
  .main-nav {
    display: flex;
    justify-content: space-between!important;
  }

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

  nav.navbar.main-nav.navbar-dark.navbar-expand-md {
    z-index: 3;
    padding: 0;
    margin: 0;
    background-color: white;
    box-shadow: 2px 2px #f7f7f7;
  }

  @media (max-width: 524px) {
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
