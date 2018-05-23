<template>
  <nav class="main-nav">
    <router-link to="/" class="nav-logo">
      <img src="../assets/spinoza-menu.png" alt="" class="spinoza-img"> 
      <span class="app-title">spinozapp</span>
    </router-link>
    <div class="nav-buttons">
      <router-link class="button" to="/affects">Affects</router-link>
      <router-link class="button" to="/reader">Reader</router-link>
      <router-link class="button" to="/graph">Graph</router-link>
    </div>
    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button to="/graph">Graph</b-button>
      </b-navbar-nav>
    </b-collapse>
  </nav>

</template>

<style scoped>
  .main-nav {
    position: fixed;
    display: flex;
    justify-content: space-around;
    top: 0;
    width: 100%;
    z-index: 3;
    padding: 0;
    margin: 0;
    background-image: linear-gradient(-180deg,#fff 33%,#fff8f8 100%);
    box-shadow: 2px 2px #f7f7f7;
  }
  .spinoza-img {
    height: 60px;
    width: auto;
  }
  .nav-logo {
    color: black;
  }
  .nav-logo:hover {
    color: #f6be0b;
    transition: 0.2s;
    text-decoration: none;
  }
  .nav-buttons {
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: space-between;
  }
  .button {
    text-decoration: none;
    background: none;
    color: black;
    border: 1px solid black;
    border-radius: 83px;
    width: 92px;
    vertical-align: center;
    font-size: 13px;
    padding: 10px;
    text-transform: uppercase;
    background: none;
  }
  .button:hover {
    color: #f6be0b;
    border-color: #f6be0b;
    transition: 0.2s;
  }
  .button:active, .button:focus {
    background-color: #f6be0b;
    border: 1px solid #f6be0b;
    color: white;
    box-shadow: none;
  }

  @media (max-width: 544px) {
    .spinoza-img {
      height: 60px;
      width: auto;
    }
    .app-title {
      display: none;
    }
    .nav-buttons {
      width: 220px;
    }
    .button {
      width: 65px;
      padding: 5px;
    }
  }
</style>
