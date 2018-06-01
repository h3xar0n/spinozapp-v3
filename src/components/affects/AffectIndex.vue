<script>
import Navigation from './Navigation.vue'

export default {
  components: {
    affectNavigation: Navigation
  }
};
</script>

<template>
  <main class="affects-route">
    <affect-navigation></affect-navigation>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <aside></aside>
  </main>
</template>

<style>

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
  text-align: center;
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
  color: black;
}

a:hover {
  color: black;
  text-decoration: none;
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

article>a>.icon-component p {
  padding-top: 5px;
  font-family: 'Dosis', sans-serif !important;
  font-size: 22px;
}

article .icon-component:hover {
  transform: scale(1.05);
  transition: 0.1s;
  cursor: pointer;
}

article>p {
  text-align: left;
}

article p .icon-component {
  display: inline-flex;
  flex-direction: row;
  padding: 2px;
  margin: 5px;
  border: 1px solid #d4d0d0;
  background-image: linear-gradient(-180deg,#fff 33%,#fff8f8 100%);
  border-radius: 6px;
   
}

article p .icon-component br {
  display: none;
}

article p .icon-component i {
  font-size: 20px;
}

article p .icon-component * {
  margin: 0 5px;
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

main.affects-route {
  display: flex;
}

main.affects-route > * {
  margin: 5px;
  padding: 5px;
  border-radius: 7px;
}

article {
  flex: 4 0 60%;
  background-image: linear-gradient(-180deg,#fff 33%,#fff8f8 100%);
}

nav {
  min-width: 250px;
  background: #95a5a6;
}

aside {
  flex: 1 1 20%;
  background-image: linear-gradient(-180deg,#fff 33%,#fff8f8 100%);
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
  nav.affect-navigation {
    flex-direction: row;
    overflow-y: hidden;
  }
  nav .icon-component p {
    display: none;
  }
  nav,
  aside {
    flex-basis: 60px;
  }
}
</style>
