<script>
  import NobilityIcon from '../icons/NobilityIcon'
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import DesireIcon from '../icons/DesireIcon'
  import JoyIcon from '../icons/JoyIcon'
  import LoveIcon from '../icons/LoveIcon'
  import AmbitionIcon from '../icons/AmbitionIcon'
  import HonorIcon from '../icons/HonorIcon'
  import GratitudeIcon from '../icons/GratitudeIcon'
  import SympathyIcon from '../icons/SympathyIcon'
  import HumilityIcon from '../icons/HumilityIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'


  export default {
    components: {
      nobilityIcon: NobilityIcon,
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      desireIcon: DesireIcon,
      joyIcon: JoyIcon,
      loveIcon: LoveIcon,
      honorIcon: HonorIcon,
      ambitionIcon: AmbitionIcon,
      gratitudeIcon: GratitudeIcon,
      sympathyIcon: SympathyIcon,
      humilityIcon: HumilityIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <nobility-icon></nobility-icon>
    <p>Any <action-icon></action-icon> of ours pertaining to other people's <desire-icon></desire-icon> and <joy-icon></joy-icon>.
      Insofar as <love-icon></love-icon> and <sympathy-icon></sympathy-icon> can become <action-icon></action-icon>, they are based on reason, and we gain the <desire-icon></desire-icon> to increase other people's power of <action-icon></action-icon>.
      Likewise, when reasonable people have <gratitude-icon></gratitude-icon> for each other, they do so with the understanding that <nobility-icon></nobility-icon>, rather than <ambition-icon></ambition-icon> or <honor-icon></honor-icon> is the basis of what they are grateful for. Subsequently, they share a common understanding, rather than a sense of debt or <humility-icon></humility-icon>.
    </p>
    <affect-solutions></affect-solutions>
    <!-- No involvements for now -->
    <!-- <affect-involvements></affect-involvements> -->
  </article>
</template>
