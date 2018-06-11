<script>
  import HonorIcon from '../icons/HonorIcon'
  import JoyIcon from '../icons/JoyIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      joyIcon: JoyIcon,
      honorIcon: HonorIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <honor-icon/>
    <p><joy-icon></joy-icon> at the thought that other people approve of something we have caused.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
