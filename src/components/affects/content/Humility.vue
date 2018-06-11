<script>
  import HumilityIcon from '../icons/HumilityIcon'
  import JoyIcon from '../icons/JoyIcon'
  import SorrowIcon from '../icons/SorrowIcon'
  import PrideIcon from '../icons/PrideIcon'
  import HatredIcon from '../icons/HatredIcon'
  import AmbitionIcon from '../icons/AmbitionIcon'
  import SelfAcceptanceIcon from '../icons/SelfAcceptanceIcon'
  import PassionIcon from '../icons/PassionIcon'
  import BenevolenceIcon from '../icons/BenevolenceIcon'
  import NobilityIcon from '../icons/NobilityIcon'
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import Solutions from '../Solutions'
  import Involvements from '../Involvements'


  export default {
    components: {
      humilityIcon: HumilityIcon,
      joyIcon: JoyIcon,
      sorrowIcon: SorrowIcon,
      selfAcceptanceIcon: SelfAcceptanceIcon,
      prideIcon: PrideIcon,
      hatredIcon: HatredIcon,
      ambitionIcon: AmbitionIcon,
      nobilityIcon: NobilityIcon,
      passionIcon: PassionIcon,
      benevolenceIcon: BenevolenceIcon,
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      affectSolutions: Solutions,
      affectInvolvements: Involvements
    }
  }
</script>

<template>
  <article>
    <humility-icon/>
    <p>
      <sorrow-icon></sorrow-icon> at the thought of our own lack of 
      power, it is a <passion-icon></passion-icon> insofar as it's 
      based on inadequate ideas, even if it does not seem to involve 
      external causes. 
      <br>
      As with the definition of suicide, what is internal to us is 
      confused with what is essential to us, whereas in reality, 
      the harm in <humility-icon></humility-icon> and suicide are 
      accidental causes that are inessential and unknown to us.
      <br> 
      Despite commonly being mistaken as a virtue, its semblance 
      is merely valued in order to avoid a show of 
      <pride-icon></pride-icon> that would incite other people's 
      <hatred-icon></hatred-icon>. This may be entirely reasonable, 
      especially in the midst of envious people, but should be 
      understood as <nobility-icon></nobility-icon> rather than 
      <humility-icon></humility-icon> since it does not involve a 
      feeling of weakness or <sorrow-icon></sorrow-icon>, but rather 
      a type of self-control or <action-icon></action-icon>. When it 
      is not based on reason, the false appearance of 
      <humility-icon></humility-icon> is simply a type of 
      <ambition-icon></ambition-icon>, hence people who constantly 
      make a show of their own weakness may truly have the most 
      unbridled lust for power. Acquising to them on the grounds 
      of <benevolence-icon></benevolence-icon> may, in turn, be just 
      as regretable as serving a tyrant. <sorrow-icon></sorrow-icon> 
      prevents us from understanding, so <humility-icon></humility-icon> 
      has no place in a reasonable understanding of one's self. 
      Yet surprisingly, since a reasonable person wants to avoid 
      <sorrow-icon></sorrow-icon> and pursue <joy-icon></joy-icon>, 
      it is easier for someone who has <humility-icon></humility-icon> 
      to relnquish it and transition to 
      <self-acceptance-icon></self-acceptance-icon> than it is for 
      someone who is trapped in <pride-icon></pride-icon>, even though <pride-icon></pride-icon> is definitively more similar <self-acceptance-icon></self-acceptance-icon>. This does not make <humility-icon></humility-icon> more useful, but merely a better problem to start with than <pride-icon></pride-icon> since there's more motivation to solve it.
    </p>
    <affect-solutions></affect-solutions>
    <!-- No involvements for now -->
    <!-- <affect-involvements></affect-involvements> -->
  </article>
</template>
