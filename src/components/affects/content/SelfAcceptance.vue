<script>
  import ActionIcon from '../icons/ActionIcon'
  import SelfAcceptanceIcon from '../icons/SelfAcceptanceIcon'
  import JoyIcon from '../icons/JoyIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      actionIcon: ActionIcon,
      joyIcon: JoyIcon,
      selfAcceptanceIcon: SelfAcceptanceIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <self-acceptance-icon/>
    <p><joy-icon/> arising from the thought of our own power of <action-icon/></p>
    <affect-solutions></affect-solutions>
    <!-- No involvements for now -->
    <!-- <affect-involvements></affect-involvements> -->
  </article>
</template>
