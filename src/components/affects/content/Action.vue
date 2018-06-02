<script>
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import AffectInv from '../involvements/AffectInv'

  export default {
    components: {
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      affectInvolvement: AffectInv
    }
  }
</script>

<template>
  <article>
    <action-icon></action-icon>
    <p>An action is an <affect-icon></affect-icon> that is a power of the mind based on our nature.</p>
    <affect-involvement></affect-involvement>
    <br>
  </article>
</template>

<style>
  .involvements {
    display: flex;
    justify-content: space-around
  }
</style>
