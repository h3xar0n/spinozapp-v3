<template>
  <div>
    <iframe v-show="$store.state.selection === 'Affect'" class="affect-video" src="https://www.youtube.com/embed/5bX-H7dYoP0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <iframe v-show="$store.state.selection !== 'Affect'" class="affect-video" src="https://www.youtube.com/embed/pVEeXjPiw54" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
  </div>
</template>
