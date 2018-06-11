<script>
  import ShameIcon from '../icons/ShameIcon'
  import SorrowIcon from '../icons/SorrowIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      sorrowIcon: SorrowIcon,
      shameIcon: ShameIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <shame-icon/>
    <p><sorrow-icon></sorrow-icon> at the thought that other people disapprove of something we have caused.</p>
    <affect-solutions></affect-solutions>
    <!-- <affect-involvements></affect-involvements> -->
  </article>
</template>
