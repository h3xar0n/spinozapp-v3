<script>
  import ActionIcon from './icons/ActionIcon.vue'
  import AffectIcon from './icons/AffectIcon.vue'
  import AmbitionIcon from './icons/AmbitionIcon.vue'
  import AngerIcon from './icons/AngerIcon.vue'
  import BenevolenceIcon from './icons/BenevolenceIcon.vue'
  import SympathyIcon from './icons/SympathyIcon.vue'
  import CourageIcon from './icons/CourageIcon.vue'
  import DesireIcon from './icons/DesireIcon.vue'
  import GratitudeIcon from './icons/GratitudeIcon.vue'
  import HatredIcon from './icons/HatredIcon.vue'
  import HonorIcon from './icons/HonorIcon.vue'
  import HumilityIcon from './icons/HumilityIcon.vue'
  import JoyIcon from './icons/JoyIcon.vue'
  import LoveIcon from './icons/LoveIcon.vue'
  import NobilityIcon from './icons/NobilityIcon.vue'
  import PassionIcon from './icons/PassionIcon.vue'
  import PrideIcon from './icons/PrideIcon.vue'
  import SelfAcceptanceIcon from './icons/SelfAcceptanceIcon.vue'
  import ShameIcon from './icons/ShameIcon.vue'
  import SorrowIcon from './icons/SorrowIcon.vue'

  export default {
    components: {
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      ambitionIcon: AmbitionIcon,
      angerIcon: AngerIcon,
      benevolenceIcon: BenevolenceIcon,
      courageIcon: CourageIcon,
      sympathyIcon: SympathyIcon,
      gratitudeIcon: GratitudeIcon,
      hatredIcon: HatredIcon,
      honorIcon: HonorIcon,
      humilityIcon: HumilityIcon,
      loveIcon: LoveIcon,
      nobilityIcon: NobilityIcon,
      prideIcon: PrideIcon,
      selfAcceptanceIcon: SelfAcceptanceIcon,
      shameIcon: ShameIcon,
      sorrowIcon: SorrowIcon,
      joyIcon: JoyIcon,
      desireIcon: DesireIcon,
      passionIcon: PassionIcon
    }
  };
</script>

<template>
  <section>
    <h3 class="panel-title">Involvements</h3>
    <p>{{ $store.state.affects[$router.history.current.path].name }} is involved in:</p>
    <!-- Affect -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Affect'">
      <action-icon></action-icon>
      <passion-icon></passion-icon>
      <joy-icon></joy-icon>
      <sorrow-icon></sorrow-icon>
      <desire-icon></desire-icon>
    </div>
    <!-- Action -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Action'">
      <courage-icon></courage-icon>
      <nobility-icon></nobility-icon>
      <self-acceptance-icon></self-acceptance-icon>
      <joy-icon></joy-icon>
      <desire-icon></desire-icon>
    </div>
    <!-- Passion -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Passion'">
      <sorrow-icon></sorrow-icon>
      <joy-icon></joy-icon>
      <desire-icon></desire-icon>
    </div>
  </section>
</template>

<style scoped>
  div {
    display: flex;
    justify-content: space-around;
  }
  div div {
    transform: scale(0.9);
  }
</style>
