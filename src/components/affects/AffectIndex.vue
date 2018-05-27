<script>
import Video from './Video.vue'
import Variants from './Variants.vue'
import Solutions from './Solutions.vue'

export default {
  filters: {
    downcase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toLowerCase() + value.slice(1);
    }
  },
  components: {
    appVideo: Video,
    appVariants: Variants,
    appSolutions: Solutions
  }
};
</script>

<template>
  <main class="affects-route">
    <nav class="affect-selector">
      <div class="icon-component" @click="$store.state.selection = 'Affect'">
        <i class="fas fa-bolt"></i>
        <p>Affect <span class="large-divide">|</span><br class="small-break"> <em>Affectus</em></p>          
      </div>
      <div class="icon-component" @click="$store.state.selection = 'Sorrow'">
        <i class="fas fa-level-down-alt"></i>
        <p>Sorrow <span class="large-divide">|</span><br class="small-break"> <em>Tristia</em></p>          
      </div>
      <div class="icon-component" @click="$store.state.selection = 'Joy'">
        <i class="fas fa-level-up-alt"></i>
        <p>Joy <span class="large-divide">|</span><br class="small-break"> <em>Laetetia</em></p>
      </div>
      <div class="icon-component" @click="$store.state.selection = 'Desire'">
        <i class="fas fa-arrows-alt"></i>
        <p>Desire <span class="large-divide">|</span><br class="small-break"> <em>Cupidatas</em></p>
      </div>
      <div class="icon-component" @click="$store.state.selection = 'Passion'">
        <i class="fas fa-compress"></i>
        <p>Passion <span class="large-divide">|</span><br class="small-break"> <em>Passio</em></p>
      </div>
      <div class="icon-component" @click="$store.state.selection = 'Action'"> 
        <i class="fas fa-expand"></i>
        <p>Action <span class="large-divide">|</span><br class="small-break"> <em>Actio</em></p>
      </div>
    </nav>
    <article>
      <h1>{{ $store.state.selection }} | <em>{{ $store.state.choices[$store.state.selection].latin }}</em></h1>
      <app-video></app-video>
      <blockquote>
        "{{ $store.state.choices[$store.state.selection].definition }}"
      </blockquote>
      <app-solutions></app-solutions>
      <br>
      <h3>Variants:</h3>
      <app-variants></app-variants>
    </article>
    <aside></aside>
  </main>
</template>

<style>

nav.affect-selector {
  display: flex;
  flex-direction: column;
}

nav .icon-component {
  flex-direction: row;
  width: 100%;
  justify-content: space-start;
  padding: 10px;
}

nav .icon-component i {
  font-size: 18px;
  width: 18px;
}

nav .icon-component p {
  margin: 0 18px;
}

nav .icon-component p em {
  color: black;
}

.affect-video {
  border-radius: 16px;
  width: 640px;
  height: 360px;
  max-width: 64vw;
  max-height: 36vw;
  margin: 0 auto;
}

article {
  text-align: center;
}

article > * {
  margin: 1vw auto;
  max-width: 750px;
}

blockquote {
  font-size: 18px;
}

p {
  text-align: left;
}

.related {
  margin-top: 2vw;
  display: flex;
  justify-content: space-between;
}

i {
  font-size: 60px;
}

.icon-component {
  min-width: 100px;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s;
  /* height: 120px; */
}
.icon-component:hover {
  transform: scale(1.1);
  transition: 0.3s;
  cursor: pointer;
}
.icon-component p {
  text-align: center;
}
.affect-parent {
  display: flex;
  border: 1px solid black;
  border-radius: 6px;
  padding-top: 20px;
}
.affect-parent p {
  padding: 10px;
}
.small-break {
  display: none;
}
em {
  color: #f3ab00;
}

main {
  display: flex;
}

main > * {
  margin: 5px;
  padding: 5px;
  border-radius: 7px;
}

article {
  flex: 4 0 60%;
  background: #ecf0f1;
}

nav {
  flex: 1 1 20%;
  background: #95a5a6;
}

aside {
  flex: 1 1 20%;
  background: #3498db;
}

@media all and (max-width: 800px) {
  .affect-video {
    border-radius: 16px;
    margin: 0 auto;
  }
  i {
    font-size: 30px;
  }
  .icon-component {
    min-width: 20px;
  }
  .affect-parent p {
    width: 80%;
    padding: 0 10px;
  }
  .large-divide {
    display: none;
  }
  .small-break {
    display: inline;
  }
}

@media all and (max-width: 640px) {
  main {
    flex-direction: column;
    flex-grow: 1;
  }
  nav .icon-component {
    width: 10%
  }

  .affect-selector .icon-component p {
    display: none;
  }
  nav.affect-selector {
    flex-direction: row;
  }
  nav,
  aside {
    flex-basis: 60px;
  }
}
</style>
