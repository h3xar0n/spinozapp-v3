<template>
  <div class="approach">
    
    <!-- affect graph and details -->
    <div class="affect-selection">
      <div class="affect-graph">
        <div class="main-ideas">
          <b-button @click="affect = 'affect'">Affect</b-button>
          <b-button @click="affect = 'desire'">Desire</b-button>
          <b-button @click="affect = 'intuition'">Intuition</b-button>
        </div>
        <div class="affections">
          <div class="sad passions">
            <b-button @click="affect = 'sad'">Sad Passions</b-button>
            <b-button @click="affect = 'hate'">Hatred</b-button>
            <b-button @click="affect = 'envy'">Envy</b-button>
            <b-button @click="affect = 'fear'">Fear</b-button>
            <b-button @click="affect = 'humility'">Humility</b-button>
            <b-button @click="affect = 'shame'">Shame</b-button>
          </div>
          <div class="joyful passions">
            <b-button @click="affect = 'joy'">Joyful Passions</b-button>
            <b-button @click="affect = 'love'">Love</b-button>
            <b-button @click="affect = 'compassion'">Compassion</b-button>
            <b-button @click="affect = 'hope'">Hope</b-button>
            <b-button @click="affect = 'pride'">Pride</b-button>
            <b-button @click="affect = 'honor'">Honor</b-button>
          </div>
          <div class="actions">
            <b-button @click="affect = 'action'">Action</b-button>
            <b-button @click="affect = 'nobility'">Nobility</b-button>
            <b-button @click="affect = 'mercy'">Mercy</b-button>
            <b-button @click="affect = 'courage'">Courage</b-button>
            <b-button @click="affect = 'fortitude'">Fortitude</b-button>
            <b-button @click="affect = 'courtesy'">Courtesy</b-button>
          </div>
        </div>

      </div>
      <div class="detail-card">
        <h1>Stuff!</h1>
        <p>Stuff</p>
        <p>Stuff</p>
        <img class="stuff" src="https://avatars0.githubusercontent.com/u/21048592?s=400&v=4" alt="">
      </div>
    </div>
    <div class="container">
      <!-- affect checkbox and resolutions -->
      <div class="row">
        <div class="col-md-4">
          <ul>
            <li>
              <input type="checkbox" id="joy" value="true" v-model="selectedAffects.joy">
              <label for="joy">Joy</label>
            </li>
            <li>
              <input type="checkbox" id="love" value="true" v-model="selectedAffects.love">
              <label for="love">Love</label>
            </li>
            <li>
              <input type="checkbox" id="john" value="true" v-model="selectedAffects.sorrow">
              <label for="sorrow">Sorrow</label>
            </li>
            <li>
              <input type="checkbox" id="mike" value="true" v-model="selectedAffects.desire">
              <label for="desire">Desire</label>
            </li>
          </ul>
          <br>
          <span>Checked names: {{ selectedAffects }}</span>
        </div>
        <div class="col-md-4" v-if="selectedAffects.sorrow === true">
          <b-card title="Solution for sorrow" img-alt="Image" img-top tag="article" class="mb-2">
            <img src="../../assets/content.png" alt="" style="max-width: 100%;">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button to="/reader" variant="primary">Read in the Ethics</b-button>
          </b-card>
        </div>
        <div class="col-md-4" v-if="selectedAffects.love === true">
          <b-card title="Refinement for love" img-alt="Image" img-top tag="article" class="mb-2">
            <img src="../../assets/content.png" alt="" style="max-width: 100%;">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button to="/reader" variant="primary">Read in the Ethics</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        affect: 'passion',
        selectedAffects: {
          joy: false,
          sorrow: false,
          desire: false,
          love: false
        }
      }
    }
  }

</script>

<style>
.stuff {
  width: 50px;
}
  ul {
    list-style: none;
    text-align: left
  }

  .affect-selection {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .affect-graph {
    max-width: 471px;
    display: flex;
    flex-flow: column;
  }

  .main-ideas {
    display: flex;
    justify-content: space-around;
  }

  .affections {
    display: flex;
    justify-content: space-between;
  }

  .main-ideas,
  .actions,
  .passions,
  .detail-card {
    background-color: white;
    border: 3px solid #f7f7f7;
    margin: 5px;
    border-radius: 10px;
  }

  .sad {
    background-color: #faf6f6;
    flex: 1;
  }

  .joyful {
    background-color: rgb(248, 248, 222);
    flex: 1;
  }

  .actions {
    background-color: rgb(239, 250, 239);
    flex: 1;
  }

  .actions button,
  .main-ideas button,
  .passions button {
    background-color: transparent;
    color: #35495e;
    border: 1px solid #35495e;
  }

  .affect-graph button {
    max-width: 120px;
    margin: 10px 0;
    font-size: 12px;
  }

  .main-ideas button {
    width: 30%;
  }

  .affections button {
    width: 100%;
  }

  .affect-graph button:hover,
  .btn-secondary:focus,
  .btn-secondary:not([disabled]):not(.disabled):active {
    background-color: #f6be0b;
    color: white;
    border-color: white;
    cursor: pointer;
    box-shadow: none;
  }

  .detail-card {
    min-width: 250px;
  }
  /* media query for phone */

  @media (max-width: 821px) {
    .detail-card {
      width: 470px;
    }
  }

  @media (max-width: 400px) {
    .affect-graph button {
      width: 70px;
      font-size: 8px;
      margin: 2px 0;
    }
    .affect-graph {
      margin-top: -40px;
    }
  }

</style>
