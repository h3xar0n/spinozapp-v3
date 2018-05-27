<template>
  <section v-show="$store.state.selection === 'Sorrow'">
    <div class="affect-parent">
      <div class="icon-component"> 
        <i class="fas fa-expand"></i>
        <p>Action <span class="large-divide">|</span><br class="small-break"> <em>Actio</em></p>
      </div>
      <p>
        This is where the description of a related section will go. It should change based on what is selected. In this case, {{ $store.state.selection | downcase }} is the one. Furthermore, you should be able to see details by click on this entire div.
      </p>
    </div>
  </sectioN>
</template>
