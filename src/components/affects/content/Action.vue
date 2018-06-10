<script>
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import Solutions from '../Solutions.vue'
  import Involvements from '../Involvements.vue'

  export default {
    components: {
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <action-icon></action-icon>
    <p>An <affect-icon></affect-icon> of which we are the sole cause.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
