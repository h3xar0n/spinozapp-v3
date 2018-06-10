<script>
  import AffectIcon from '../icons/AffectIcon'
  import Solutions from '../Solutions.vue'
  import Involvements from '../Involvements.vue'
  
  export default {
    components: {
      affectIcon: AffectIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <affect-icon></affect-icon>
    <p>A change in both our body and mind whenever we gain or lose the power to act from our own nature. It constitutes what we essentially are, as well as the basis of the different values we may have.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
