<template>
  <div class="approach">
    <!-- affect graph and details -->
    <div class="affect-selection">
      <div class="affect-graph">
        <div class="main-ideas">
          <button @click="affect = 'affect'">Affect</button>
          <button @click="affect = 'desire'">Desire</button>
          <button @click="affect = 'intuition'">Intuition</button>
        </div>
        <div class="affections">
          <div class="sad passions">
            <button @click="affect = 'sad'">Sadness</button>
            <button @click="affect = 'hate'">Hatred</button>
            <button @click="affect = 'envy'">Envy</button>
            <button @click="affect = 'fear'">Fear</button>
            <button @click="affect = 'humility'">Humility</button>
            <button @click="affect = 'shame'">Shame</button>
          </div>
          <div class="joyful passions">
            <button @click="affect = 'joy'">Joy</button>
            <button @click="affect = 'love'">Love</button>
            <button @click="affect = 'compassion'">Compassion</button>
            <button @click="affect = 'hope'">Hope</button>
            <button @click="affect = 'pride'">Pride</button>
            <button @click="affect = 'honor'">Honor</button>
          </div>
          <div class="actions">
            <button @click="affect = 'action'">Action</button>
            <button @click="affect = 'nobility'">Nobility</button>
            <button @click="affect = 'mercy'">Mercy</button>
            <button @click="affect = 'courage'">Courage</button>
            <button @click="affect = 'fortitude'">Fortitude</button>
            <button @click="affect = 'courtesy'">Courtesy</button>
          </div>
        </div>
      </div>
      <div class="detail-card">
        <transition name="fade">
          <div v-if="affect === 'affect'">
            <h1>Affect</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'desire'">
            <h1>Desire</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Vu4C04W52BQ" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.</p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'intuition'">
            <h1>Intuition</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/uPG2GDjeqtM" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'sad'">
            <h1>Sorrow</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/PaZ1EmPOE_k" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.</p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'hate'">
            <h1>Hatred</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/coiCkmcKjX8" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'envy'">
            <h1>Envy</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'fear'">
            <h1>Fear</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'humility'">
            <h1>Humility</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'shame'">
            <h1>Shame</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'joy'">
            <h1>Joy</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'love'">
            <h1>Love</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'compassion'">
            <h1>Compassion</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'hope'">
            <h1>Hope</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'pride'">
            <h1>Pride</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'honor'">
            <h1>Honor</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'action'">
            <h1>Action</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'nobility'">
            <h1>Nobility</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'mercy'">
            <h1>Mercy</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'courage'">
            <h1>Courage</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'fortitude'">
            <h1>Fortitude</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="affect === 'courtesy'">
            <h1>Courtesy</h1>
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
              allowfullscreen></iframe>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </transition>
      </div>
    </div>
    <construction></construction>
    <!-- <div class="container">
      affect checkbox and resolutions
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
      </div>
    </div> -->
  </div>
</template>

<script>
  import Construction from '../Construction'

  export default {
    data() {
      return {
        affect: "affect",
        selectedAffects: {
          joy: false,
          sorrow: false,
          desire: false,
          love: false
        }
      };
    },
    components: {
      construction: Construction
    }
  };

</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .stuff {
    width: 50px;
  }

  ul {
    list-style: none;
    text-align: left;
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
    padding: 5px 0;
    border-radius: 20px;
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
    transition: 0.3s;
  }

  .affect-graph button:focus {
    outline: 0;
  }

  .detail-card {
    min-width: 250px;
    position: relative
  }

  .detail-card div {
    width: 100%;
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  /* media query for phone */

  @media (max-width: 821px) {
    .detail-card {
      width: 470px;
    }
    .affect-selection {
      min-height: 400px;
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
