<script>
  import PrideIcon from '../icons/PrideIcon'
  import JoyIcon from '../icons/JoyIcon'
  import SorrowIcon from '../icons/SorrowIcon'
  import SelfAcceptanceIcon from '../icons/SelfAcceptanceIcon'
  import PassionIcon from '../icons/PassionIcon'
  import HumilityIcon from '../icons/HumilityIcon'
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'


  export default {
    components: {
      prideIcon: PrideIcon,
      joyIcon: JoyIcon,
      sorrowIcon: SorrowIcon,
      selfAcceptanceIcon: SelfAcceptanceIcon,
      passionIcon: PassionIcon,
      actionIcon: ActionIcon,
      humilityIcon: HumilityIcon,
      affectIcon: AffectIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <pride-icon/>
    <p>An excessive <joy-icon></joy-icon> at the thought of our own power, it is a <passion-icon></passion-icon> insofar as it's based on inadequate ideas, even if it does not seem to involve external causes. 
      It is excessive because it distracts us from understanding, and as such, it often leads us to decisions that result in <sorrow-icon></sorrow-icon>. 
      Nevertheless, it is fundementally similar to <self-acceptance-icon></self-acceptance-icon>, the best and most reliable <action-icon></action-icon> we can strive for. <pride-icon></pride-icon> can be transformed into <self-acceptance-icon></self-acceptance-icon> through adequate ideas about the extent of our power of <action-icon></action-icon>. Since it is far more difficult to relenquish a <joy-icon></joy-icon> than a <sorrow-icon></sorrow-icon>, ironically it is often more likely to obtain adequate ideas by starting with <humility-icon></humility-icon>, even though <pride-icon></pride-icon> starts more closely to our goal.</p>
    <affect-solutions></affect-solutions>
    <affect-involvements></affect-involvements>
  </article>
</template>
