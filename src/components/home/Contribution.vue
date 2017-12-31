<template>
  <b-container class="contribution-info">
    <b-row>
      <b-col>
        <img src="../../assets/gitlab-logo.png" alt="">
        <h2>Code</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </b-col>
      <b-col>
        <img src="../../assets/content.png" alt="">
        <h2>Content</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </b-col>
      <b-col>
        <img src="../../assets/spinoza-money.jpg" alt="">
        <h2>Cash</h2>
        <b-progress :value="70" class="w-75 mb-2" />
        <b-progress :value="13" class="w-50 mb-2" />
        <b-progress :value="3" class="w-25" />
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
  .contribution-info img {
    height: 100px;
    width: auto;
    background-image: linear-gradient(-180deg,#fff 33%,#fff8f8 100%);
  }
</style>
