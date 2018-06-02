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
    <div>Video goes here</div>
    <affect-involvement></affect-involvement>
    <br>
    <h3>Variants:</h3>
    <div>Variants go here</div>
  </article>
</template>

<style>
  
</style>
