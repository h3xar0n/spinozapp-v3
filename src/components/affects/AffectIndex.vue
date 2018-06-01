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

article .icon-component:hover {
  transform: scale(1.1);
  transition: 0.3s;
  cursor: pointer;
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
  background: #ecf0f1;
}

nav {
  min-width: 250px;
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
