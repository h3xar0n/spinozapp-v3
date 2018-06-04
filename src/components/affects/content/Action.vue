<script>
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import Solutions from '../Solutions.vue'

  export default {
    components: {
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      affectSolutions: Solutions
    }
  }
</script>

<template>
  <article>
    <action-icon></action-icon>
    <p>An action is an <affect-icon></affect-icon> that is a power of the mind based on our nature.</p>
    <affect-solutions></affect-solutions>
  </article>
</template>
