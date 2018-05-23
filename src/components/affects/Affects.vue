<template>
  <div class="approach">
    <!-- affect graph and details -->
    <div class="affect-selection">
      <div class="detail-card">
        <!-- String interpolation example -->
        <div>
          <h1>{{ choice | capitalize }}</h1>
          <p>
            {{ details[choice].text }}
          </p>
          <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" gesture="media" allow="encrypted-media"
            allowfullscreen></iframe>
          <p>Related sections:</p>
          <ul>
            <li :key="section" v-for="section in details[choice].related">
              <a :href="section.link">{{ section.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="affect-graph">
        <div class="main-ideas">
          <button @click="choice = 'affect'">Affect</button>
          <button @click="choice = 'desire'">Desire</button>
          <button @click="choice = 'intuition'">Intuition</button>
        </div>
        <div class="affections">
          <div class="sad passions">
            <button @click="choice = 'sad'">Sadness</button>
            <button @click="choice = 'hate'">Hatred</button>
            <button @click="choice = 'envy'">Envy</button>
            <button @click="choice = 'fear'">Fear</button>
            <button @click="choice = 'humility'">Humility</button>
            <button @click="choice = 'shame'">Shame</button>
          </div>
          <div class="joyful passions">
            <button @click="choice = 'joy'">Joy</button>
            <button @click="choice = 'love'">Love</button>
            <button @click="choice = 'compassion'">Compassion</button>
            <button @click="choice = 'hope'">Hope</button>
            <button @click="choice = 'pride'">Pride</button>
            <button @click="choice = 'honor'">Honor</button>
          </div>
          <div class="actions">
            <button @click="choice = 'action'">Action</button>
            <button @click="choice = 'nobility'">Nobility</button>
            <button @click="choice = 'mercy'">Mercy</button>
            <button @click="choice = 'courage'">Courage</button>
            <button @click="choice = 'fortitude'">Fortitude</button>
            <button @click="choice = 'courtesy'">Courtesy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Construction from '../Construction'

  export default {
    data() {
      return {
        choice: "affect",
        details: {
          affect: {
            text: 'affect is a change in substance',
            related: [
              { link: 'https://www.google.com',
                title: 'P1'
              },
              { link: 'https://www.google.com',
                title: 'P3'
              }
            ]
          }
        }
      };
    },
    components: {
      construction: Construction
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
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

  .affect-selection>div {
    width: 400px;
    margin: 0 1vw;
  }

  .affect-graph {
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
      min-height: 340px;
    }
    .affect-selection {
      min-height: 400px;
    }
  }

  @media (max-width: 490px) {
    .affect-selection>div {
      width: 300px;
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
