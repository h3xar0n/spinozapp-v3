<script>
  import SympathyIcon from '../icons/SympathyIcon'
  import JoyIcon from '../icons/JoyIcon'
  import SorrowIcon from '../icons/SorrowIcon'
  import DesireIcon from '../icons/DesireIcon'
  import LoveIcon from '../icons/LoveIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'

  export default {
    components: {
      joyIcon: JoyIcon,
      sympathyIcon: SympathyIcon,
      sorrowIcon: SorrowIcon,
      affectSolutions: Solutions,
      desireIcon: DesireIcon,
      loveIcon: LoveIcon,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <sympathy-icon/>
    <p>A disposition towards another based on a sense of similarity, resulting in conviviality (<joy-icon></joy-icon> at the thought of their <joy-icon></joy-icon>), pity (<sorrow-icon></sorrow-icon> at the thought of their <sorrow-icon></sorrow-icon>), and emulation (a shared <desire-icon></desire-icon>).</p> 
    <p><sympathy-icon></sympathy-icon> but does not necessarily imply <love-icon></love-icon>, since it is based on the idea of similarity rather than the idea of a direct cause. On the other hand, <love-icon></love-icon> often does imply <sympathy-icon></sympathy-icon>, insofar as one has a <desire-icon></desire-icon> for the perceived cause of their <joy-icon></joy-icon> to persist, and the other person is similar. This is why <love-icon></love-icon> of another person produces such different results than <love-icon></love-icon> of cake, a nebula, or a song.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
