<script>
  import ActionIcon from '../icons/ActionIcon'
  import JoyIcon from '../icons/JoyIcon'
  import DesireIcon from '../icons/DesireIcon'
  import PassionIcon from '../icons/PassionIcon'
  import GratitudeIcon from '../icons/GratitudeIcon'
  import LoveIcon from '../icons/LoveIcon'
  import Solutions from '../Solutions.vue'
  import Involvements from '../Involvements.vue'

  export default {
    components: {
      actionIcon: ActionIcon,
      joyIcon: JoyIcon,
      desireIcon: DesireIcon,
      passionIcon: PassionIcon,
      gratitudeIcon: GratitudeIcon,
      loveIcon: LoveIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <gratitude-icon/>
    <p>
      A <desire-icon/> to give <joy-icon/> to one whom we <love-icon/>. It is an <action-icon></action-icon> or <passion-icon></passion-icon> based on whether it pertains 
      solely to our essence, insofar as we might think too highly of others or too little of ourselves.
    </p>
    <affect-solutions></affect-solutions>
    <!-- <affect-involvements></affect-involvements> -->
  </article>
</template>
