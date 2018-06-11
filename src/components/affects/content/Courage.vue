<script>
  import CourageIcon from '../icons/CourageIcon'
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import DesireIcon from '../icons/DesireIcon'
  import JoyIcon from '../icons/JoyIcon'
  import Solutions from '../Solutions.vue'
  import Involvements from '../Involvements.vue'

  export default {
    components: {
      courageIcon: CourageIcon,
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      desireIcon: DesireIcon,
      joyIcon: JoyIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <courage-icon></courage-icon>
    <p>An <action-icon></action-icon> pertaining to reasonable <desire-icon></desire-icon> and <joy-icon></joy-icon> of others.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
