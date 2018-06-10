<script>
  import LoveIcon from '../icons/LoveIcon'
  import JoyIcon from '../icons/JoyIcon'
  import PassionIcon from '../icons/PassionIcon'
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      loveIcon: LoveIcon,
      joyIcon: JoyIcon,
      passionIcon: PassionIcon,
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <love-icon/>
    <p><joy-icon></joy-icon> accompanied by the idea of an external cause.</p>
    <!-- How can it be an action? -->
    <!-- How can it be a passion? -->
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
