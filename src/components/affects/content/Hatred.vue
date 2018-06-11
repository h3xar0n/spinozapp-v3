<script>
  import PassionIcon from '../icons/PassionIcon'
  import SorrowIcon from '../icons/SorrowIcon'
  import HatredIcon from '../icons/HatredIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      passionIcon: PassionIcon,
      sorrowIcon: SorrowIcon,
      hatredIcon: HatredIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <hatred-icon></hatred-icon>
    <p><sorrow-icon/> accompanied by the idea of an external cause. While necessarily a <passion-icon/>, the idea of the external cause may not be the (only) actual cause.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
