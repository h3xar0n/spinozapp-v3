<script>
  import PassionIcon from '../icons/PassionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import Solutions from '../Solutions.vue'
  import Involvements from '../Involvements.vue'

  export default {
    components: {
      passionIcon: PassionIcon,
      affectIcon: AffectIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <passion-icon/>
    <p>An <affect-icon></affect-icon> of which we are only the partial cause.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
