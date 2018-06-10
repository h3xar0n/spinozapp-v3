<script>
  import SorrowIcon from '../icons/SorrowIcon'
  import PassionIcon from '../icons/PassionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      passionIcon: PassionIcon,
      sorrowIcon: SorrowIcon,
      affectIcon: AffectIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <sorrow-icon/>
    <p>An <affect-icon></affect-icon> that is our transition from greater to lesser perfection. Since if one had the power they would never choose to lose perfection, it is necessarily caused by something external to us, hence it's a <passion-icon></passion-icon>.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
