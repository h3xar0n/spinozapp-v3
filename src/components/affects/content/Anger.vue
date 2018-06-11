<script>
  import AngerIcon from '../icons/AngerIcon'
  import HatredIcon from '../icons/HatredIcon'
  import DesireIcon from '../icons/DesireIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      angerIcon: AngerIcon,
      hatredIcon: HatredIcon,
      desireIcon: DesireIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <anger-icon></anger-icon>
    <p>A <desire-icon></desire-icon> to injure or destroy the object of our <hatred-icon></hatred-icon>.</p>
    <affect-solutions></affect-solutions>
    <!-- <affect-involvements></affect-involvements> -->
  </article>
</template>
