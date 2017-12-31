<template>
  <b-container class="features-info">
    <b-row>
      <b-col>
        <h1>⚡</h1>
        <h2>Affects</h2>
        <p>Customize your reading experience by focusing on the affects that pertain the most to you.</p>
        <b-button to="/affects">Affects</b-button>
      </b-col>
      <b-col>
        <h1>📖</h1>
        <h2>Reader</h2>
        <p>Read each element in the Ethics with its dependencies and involvements in sight at all times</p>
        <b-button to="/reader">Reader</b-button>
      </b-col>
      <b-col>
        <h1>🌐</h1>
        <h2>Graph</h2>
        <p>Navigate the Ethics with an interactive visualization of the connections between the elements</p>
        <b-button to="/graph">Graph</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
  .features-info {
    padding: 20px;
  }
  .col {
    margin-top: 30px;
  }
</style>
