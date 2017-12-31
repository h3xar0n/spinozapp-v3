<template>
  <div class="approach">
    <div class="container">
      <!-- affect graph and details -->
      <div class="row">
        <div class="affect-graph col-xs-12 col-md-8 row">
          <div class="main-ideas col-xs-12">
            <b-button @click="affect = 'affect'">Affect</b-button>
            <b-button @click="affect = 'desire'">Desire</b-button>
            <b-button @click="affect = 'intuition'">Intuition</b-button>  
          </div>
          <div class="passions col-xs-8">
            <div>
              <b-button @click="affect = 'sad'">Sad Passions</b-button>
              <b-button @click="affect = 'joy'">Joyful Passions</b-button>
            </div>
            <div>
              <b-button @click="affect = 'hate'">Hatred</b-button>
              <b-button @click="affect = 'love'">Love</b-button>
            </div>
            <div>
              <b-button @click="affect = 'envy'">Envy</b-button>
              <b-button @click="affect = 'compassion'">Compassion</b-button>
            </div>
            <div>
              <b-button @click="affect = 'fear'">Fear</b-button>
              <b-button @click="affect = 'hope'">Hope</b-button>
            </div>
            <div>
              <b-button @click="affect = 'humility'">Humility</b-button>
              <b-button @click="affect = 'pride'">Pride</b-button>
            </div>
            <div>
              <b-button @click="affect = 'shame'">Shame</b-button>
              <b-button @click="affect = 'honor'">Honor</b-button>
            </div>
          </div>
          <div class="actions col-xs-4">
            <div>
              <b-button @click="affect = 'action'">Action</b-button>
            </div>
            <div>
              <b-button @click="affect = 'nobility'">Nobility</b-button>
            </div>
            <div>
              <b-button @click="affect = 'mercy'">Mercy</b-button>
            </div>
            <div>
              <b-button @click="affect = 'courage'">Courage</b-button>
            </div>
            <div>
              <b-button @click="affect = 'fortitude'">Fortitude</b-button>
            </div>
            <div>
              <b-button @click="affect = 'courtesy'">Courtesy</b-button>
            </div>
          </div>
          
        
        </div>
        <div class="detail-card col-xs-12 col-md-4">
          <div v-if="affect === 'passion'">
            <b-card title="Passion"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
              <img src="../../assets/spinoza-money.jpg" alt="" style="max-width: 100%;">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button v-on:click="checkedName.push('Mike')" variant="primary">Find a resolution</b-button>
              <br>
              <br>
              <b-button to="/reader" variant="primary">Read in the Ethics</b-button>
            </b-card>
          </div>
          <div v-if="affect === 'action'">
            <b-card title="Action"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
              <img src="../../assets/content.png" alt="" style="max-width: 100%;">
              <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button to="/reader" variant="primary">Read in the Ethics</b-button>
            </b-card>
          </div>
          <div v-if="affect === 'sorrow'">
            <b-card title="Sorrow"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
              <img src="../../assets/spinoza-emo.jpg" alt="" style="max-width: 100%;">
              <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button @click="selectedAffects.sorrow = true" variant="primary">Find a resolution</b-button>
              <br>
              <br>
              <b-button to="/reader" variant="primary">Read in the Ethics</b-button>
            </b-card>
          </div>
          <div v-if="affect === 'joy'">
            <b-card title="Joy"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
              <img src="../../assets/spinoza-menu.png" alt="" style="max-width: 100%;">
              <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button @click="selectedAffects.joy = true" variant="primary">Find a resolution</b-button>
              <br>
              <br>
              <b-button to="/reader" variant="primary">Read in the Ethics</b-button>
            </b-card>
          </div>
          <div v-if="affect === 'love'">
            <b-card title="Love"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
              <img src="../../assets/spinoza-menu.png" alt="" style="max-width: 100%;">
              <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button @click="selectedAffects.love = true" variant="primary">Find a resolution</b-button>
              <br>
              <br>
              <b-button to="/reader" variant="primary">Read in the Ethics</b-button>
            </b-card>
          </div>
        </div>
      </div>
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
          <b-card title="Solution for sorrow"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2">
            <img src="../../assets/content.png" alt="" style="max-width: 100%;">
            <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button to="/reader" variant="primary">Read in the Ethics</b-button>
          </b-card>
        </div>
        <div class="col-md-4" v-if="selectedAffects.love === true">
          <b-card title="Refinement for love"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2">
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
  data () {
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
ul {
  list-style: none;
  text-align: left
}

.main-ideas, .actions, .passions {
  background-color: white;
  margin: 5px;
  border-radius: 10px;
}

.actions {
  padding: 2px;
}

.actions button, .main-ideas button, .passions button {
  background-color: #cbdeee;
  color: #35495e;
  border: none;
}

.affect-graph button {
  width: 120px;
  margin: 10px;
  font-size: 16px;
}

.affect-graph button:hover, .btn-secondary:not([disabled]):not(.disabled):active {
  background-color: white;
  color: black;
  box-shadow: 2px 2px 2px 2px #e5f0f9;
}

/* media query for phone */
</style>
