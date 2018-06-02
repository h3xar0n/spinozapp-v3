<script>
  import AffectIcon from '../icons/AffectIcon.vue'
  import AffectSol from '../solutions/AffectSol.vue'

  export default {
    components: {
      affectIcon: AffectIcon,
      affectSol: AffectSol
    }
  }
</script>

<template>
  <section class="related">
    <affect-icon></affect-icon>
    <affect-sol></affect-sol>
  </section>
</template>

<style>
  .related {
    display: flex;
    justify-content: start;
  }
</style>
