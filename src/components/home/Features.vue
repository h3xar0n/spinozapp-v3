<template>
  <div class="features-info">
    <div class="info-column">
      <h1>⚡</h1>
      <h3>Affects</h3>
      <p>Customize your reading experience by focusing on the affects that pertain the most to you.</p>
      <br>
      <router-link class="button" to="/affects">Affects</router-link >
    </div>
    <div class="info-column">
      <h1>📖</h1>
      <h3>Reader</h3>
      <p>Read each element in the Ethics with its dependencies and involvements in sight at all times</p>
      <br>
      <router-link class="button" to="/reader">Reader</router-link>
    </div>
    <div class="info-column">
      <h1>🌐</h1>
      <h3>Graph</h3>
      <p>Navigate the Ethics with an interactive visualization of the connections between the elements</p>
      <br>
      <router-link class="button" to="/graph">Graph</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hover: false
      }
    }
  }

</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0
  }
  .fade-block {
    position: relative;
    margin: 80px 0;
    font-size: 12px;
  }
  .fade-block span {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .features-info {
    background-image: linear-gradient(-180deg,#fff 33%,#fff8f8 100%);
    max-width: 100vw;
    padding: 22px 10% 80px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .features-info .col-sm-12 {
    padding-top: 40px;
  }
  .features-info p {
    text-align: left;
    widows: 4;
    margin: 0 auto;
  }
  .info-column {
    margin-top: 30px;
  }
  .info-column p {
    width: 229px;
  }
  @media (max-width: 1080px) {
    .info-column p {
      width: 100%;
    }
  }
  .button {
    text-decoration: none;
    background: none;
    color: #f6be0b;
    border: 1px solid #f6be0b;
    border-radius: 83px;
    width: 92px;
    vertical-align: center;
    font-size: 13px;
    padding: 10px;
    text-transform: uppercase;
    background: none;
  }
  .button:hover {
    color: white;
    border-color: white;
    background-color: #f6be0b;
    text-decoration: none;
    transition: 0.2s;
  }
  .button:active, .button:focus {
    background-color: #f6be0b;
    border: 1px solid #f6be0b;
    color: white;
    box-shadow: none;
  }
  @media (max-width: 770px) {
    .features-info .col-sm-12 p {
      margin: auto 10%;
    }
  }
</style>
