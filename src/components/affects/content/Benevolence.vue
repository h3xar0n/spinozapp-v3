<script>
  import BenevolenceIcon from '../icons/BenevolenceIcon'
  import DesireIcon from '../icons/DesireIcon'
  import SympathyIcon from '../icons/SympathyIcon'
  import GratitudeIcon from '../icons/GratitudeIcon'
  import SorrowIcon from '../icons/SorrowIcon'
  import ActionIcon from '../icons/ActionIcon'
  import LoveIcon from '../icons/LoveIcon'
  import NobilityIcon from '../icons/NobilityIcon'
  import Solutions from '../Solutions.vue'
  import Involvements from '../Involvements.vue'

  export default {
    components: {
      benevolenceIcon: BenevolenceIcon,
      desireIcon: DesireIcon,
      sympathyIcon: SympathyIcon,
      gratitudeIcon: GratitudeIcon,
      loveIcon: LoveIcon,
      actionIcon: ActionIcon,
      nobilityIcon: NobilityIcon,
      sorrowIcon: SorrowIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <benevolence-icon></benevolence-icon>
    <p>A <desire-icon></desire-icon> to benefit one for whom we feel <sympathy-icon></sympathy-icon>. 
      Unlike <gratitude-icon></gratitude-icon>, the basis of <benevolence-icon></benevolence-icon> is a sense of similarity with another person, not necessarily <love-icon></love-icon> for them.
      It can be excessive insofar as we often regret decisions that were based on pity, at least inasmuch as we should not need to feel <sorrow-icon></sorrow-icon> as the basis for helping others. When the decision to help is based solely on reason, it is the <action-icon></action-icon> of <nobility-icon></nobility-icon>.</p>
    <affect-solutions></affect-solutions>
    <!-- <affect-involvements></affect-involvements> -->
  </article>
</template>
