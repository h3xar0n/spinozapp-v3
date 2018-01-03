<template>
  <div class="features-info dark-block">

    <!-- <div @mouseover="hover = true" @mouseout="hover = false" class="fade-block">
      <transition name="fade" mode="in-out">
        <span v-if="hover === false">Bonum quod unusquisque qui sectatur virtutem, sibi appetit, reliquis hominibus etiam cupiet et eo magis quo majorem Dei habuerit cognitionem.</span>
      </transition>
      <transition name="fade" mode="out-in">
        <span v-if="hover === true">The good which people who pursue virtue aim at for themselves, they will also desire for the rest of humanity, and all the more as they acquire a greater understanding of Nature</span>
      </transition>
    </div> -->

    <b-row>
      <b-col sm="12" md="4">
        <h1>⚡</h1>
        <h3>Affects</h3>
        <p>Customize your reading experience by focusing on the affects that pertain the most to you.</p>
        <br>
        <br>
        <br>
        <b-button to="/affects">Affects</b-button>
      </b-col>
      <b-col sm="12" md="4">
        <h1>📖</h1>
        <h3>Reader</h3>
        <p>Read each element in the Ethics with its dependencies and involvements in sight at all times</p>
        <br>
        <br>
        <br>
        <b-button to="/reader">Reader</b-button>
      </b-col>
      <b-col sm="12" md="4">
        <h1>🌐</h1>
        <h3>Graph</h3>
        <p>Navigate the Ethics with an interactive visualization of the connections between the elements</p>
        <br>
        <br>
        <br>
        <b-button to="/graph">Graph</b-button>
      </b-col>
    </b-row>
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

<style>
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
