<template>
  <b-container class="features-info dark-block">
    <b-row>
      <b-col sm="12" md="4">
        <h1>⚡</h1>
        <h2>Affects</h2>
        <p>Customize your reading 
          experience by focusing 
          on the affects that 
          pertain the most to you.</p>
        <br>
        <br>
        <br>
        <b-button to="/affects">Affects</b-button>
      </b-col>
      <b-col sm="12" md="4">
        <h1>📖</h1>
        <h2>Reader</h2>
        <p>Read each element in the Ethics with its dependencies and involvements in sight at all times</p>
        <br>
        <br>
        <br>
        <b-button to="/reader">Reader</b-button>
      </b-col>
      <b-col sm="12" md="4">
        <h1>🌐</h1>
        <h2>Graph</h2>
        <p>Navigate the Ethics with an interactive visualization of the connections between the elements</p>
        <br>
        <br>
        <br>
        <b-button to="/graph">Graph</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
  .features-info {
    max-width: 100vw;
    padding: 22px 10% 80px;
    position: relative;
  }

  .features-info .col-sm-12 {
    padding-top: 40px;
  }

  .features-info p {
    text-align: left;
    widows: 4;
    margin: 0 auto;
  }

  .features-info a {
    position: absolute;
    bottom: 0;
    width: 30%;
    left: 35%;
  }

  .col {
    margin-top: 30px;
  }

  @media (max-width: 770px) {
    .features-info .col-sm-12 p {
      margin: auto 10%;
    }
  }
</style>
