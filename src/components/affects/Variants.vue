<template>
  <section class="related">
    <div class="icon-component" v-show="$store.state.choices[$store.state.selection].variations.sorrow" @click="$store.state.selection = 'Sorrow'">
      <i class="fas fa-level-down-alt"></i>
      <p>Sorrow <span class="large-divide">|</span><br class="small-break"> <em>Tristia</em></p>          
    </div>
    <div class="icon-component">
      <i class="fas fa-level-up-alt"></i>
      <p>Joy <span class="large-divide">|</span><br class="small-break"> <em>Laetetia</em></p>
    </div>
    <div class="icon-component">
      <i class="fas fa-arrows-alt"></i>
      <p>Desire <span class="large-divide">|</span><br class="small-break"> <em>Cupidatas</em></p>
    </div>
    <div class="icon-component">
      <i class="fas fa-compress"></i>
      <p>Passion <span class="large-divide">|</span><br class="small-break"> <em>Passio</em></p>
    </div>
    <div class="icon-component"> 
      <i class="fas fa-expand"></i>
      <p>Action <span class="large-divide">|</span><br class="small-break"> <em>Actio</em></p>
    </div>
  </section>
</template>
