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
import SelfApprovalIcon from './icons/SelfApprovalIcon.vue'
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
    selfApprovalIcon: SelfApprovalIcon,
    shameIcon: ShameIcon,
    sorrowIcon: SorrowIcon,
    joyIcon: JoyIcon,
    desireIcon: DesireIcon,
    passionIcon: PassionIcon
  }
};
</script>

<template>
  <nav class="affect-navigation">
    <affect-icon></affect-icon>
    <action-icon></action-icon> 
    <passion-icon></passion-icon>
    <sorrow-icon></sorrow-icon>
    <joy-icon></joy-icon>
    <desire-icon></desire-icon>
    <!-- Fear -->
    <!-- Hope -->
    <!-- Despair -->
    <!-- Confidence -->
    <courage-icon></courage-icon>
    <hatred-icon></hatred-icon>
    <love-icon></love-icon>
    <anger-icon></anger-icon>
    <gratitude-icon></gratitude-icon>
    <!-- Envy  -->
    <sympathy-icon></sympathy-icon>
    <!-- Indignation -->
    <benevolence-icon></benevolence-icon>
    <shame-icon></shame-icon>
    <honor-icon></honor-icon>
    <ambition-icon></ambition-icon>
    <nobility-icon></nobility-icon>
    <humility-icon></humility-icon>
    <pride-icon></pride-icon>
    <self-approval-icon></self-approval-icon>
    
  </nav>
</template>

<style>
nav {
  min-width: 200px;
}

nav.affect-navigation {
  display: flex;
  flex-direction: column;
  background-color: #0e0f0f;
  /* overflow-y: scroll; */
  /* height: calc(100vh - 70px); */
  /* position: fixed; */
}

nav .icon-component {
  flex-direction: row;
  width: 100%;
  justify-content: space-start;
  margin: 1px;
  border-radius: 3px;
  color: white;
  padding: 10px;
}

nav .icon-component:hover {
  background-color: darkslategray;
  transition: 0.1s;
}

nav a:hover {
  text-decoration: none;
}

nav .icon-component i {
  font-size: 12px;
  width: 18px;
}

nav .icon-component p {
  margin: 0 18px;
  text-align: left;
  font-size: 12px;
}

nav .icon-component p em, 
nav .icon-component p br {
  display: none;
}

@media (max-width: 640px) {
  nav.affect-navigation {
    flex-direction: row;
  }
}

</style>
