<script>
  import AmbitionIcon from '../icons/AmbitionIcon'
  import DesireIcon from '../icons/DesireIcon'
  import PassionIcon from '../icons/PassionIcon'
  import HonorIcon from '../icons/HonorIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      ambitionIcon: AmbitionIcon,
      desireIcon: DesireIcon,
      passionIcon: PassionIcon,
      honorIcon: HonorIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <ambition-icon></ambition-icon>
    <p>An excessive <desire-icon></desire-icon> for power, namely for others to live in accordance with our values. Although it can hardly be avoided if one believes in their own values, it may lead us to merely simulate virtue for the sake of <honor-icon></honor-icon>. Worse, it compels us to do things that we know go against our understanding, and thereby amplifies every other <passion-icon></passion-icon>.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
