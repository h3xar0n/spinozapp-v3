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
    <p>{{ $store.state.affects[$router.history.current.path].name }} is primarily involved in:</p>
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
    <!-- Joy -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Joy'">
      <love-icon></love-icon>
      <honor-icon></honor-icon>
      <pride-icon></pride-icon>
      <self-acceptance-icon></self-acceptance-icon>
      <sympathy-icon></sympathy-icon>
      <gratitude-icon></gratitude-icon>
    </div>
    <!-- Love -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Love'">
      <gratitude-icon></gratitude-icon>
      <nobility-icon></nobility-icon>
    </div>
    <!-- Sorrow -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Sorrow'">
      <hatred-icon></hatred-icon>
      <shame-icon></shame-icon>
      <humility-icon></humility-icon>
      <anger-icon></anger-icon>
      <sympathy-icon></sympathy-icon>
    </div>
    <!-- Hatred -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Hatred'">
      <anger-icon></anger-icon>
    </div>
    <!-- Desire -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Desire'">
      <ambition-icon></ambition-icon>
      <benevolence-icon></benevolence-icon>
      <gratitude-icon></gratitude-icon>
      <anger-icon></anger-icon>
      <sympathy-icon></sympathy-icon>
      <nobility-icon></nobility-icon>
      <courage-icon></courage-icon>
    </div>
    <!-- Sympathy -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Sympathy'">
      <benevolence-icon></benevolence-icon>
    </div>
    <!-- Vainglory -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Vainglory'">
      <ambition-icon></ambition-icon>
    </div>
    <!-- Pride -->
    <div v-show="$store.state.affects[$router.history.current.path].name === 'Pride'">
      <ambition-icon></ambition-icon>
    </div>
  </section>
</template>

<style scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  div div * {
    transform: scale(0.7);
  }
</style>
