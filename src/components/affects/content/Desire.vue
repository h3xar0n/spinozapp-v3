<script>
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import DesireIcon from '../icons/DesireIcon'
  import PassionIcon from '../icons/PassionIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      desireIcon: DesireIcon,
      passionIcon: PassionIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <desire-icon></desire-icon>
    <p>
      The essence of what we are, each <affect-icon></affect-icon> tests our power to continue striving, 
      and is an <action-icon></action-icon> or <passion-icon></passion-icon> based on whether it pertains 
      solely to our essence.
    </p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>

