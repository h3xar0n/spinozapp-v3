<script>
  import JoyIcon from '../icons/JoyIcon'
  import PassionIcon from '../icons/PassionIcon'
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
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
    <joy-icon/>
    <p>An <affect-icon></affect-icon> that is our transition from lesser to greater perfection. If our understanding is the sole cause, it's an <action-icon></action-icon>, and the purpose of the Ethics is to maximize this type. Otherwise, and far more commonly, it's a <passion-icon></passion-icon>, which is still worth pursuing, but only insofar as it still helps us to live well and to understand.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
