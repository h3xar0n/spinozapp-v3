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
    <nobility-icon></nobility-icon>
    <courage-icon></courage-icon>
    <self-approval-icon></self-approval-icon>
    <passion-icon></passion-icon>
    <joy-icon></joy-icon>
    <love-icon></love-icon>
    <sympathy-icon></sympathy-icon>
    <pride-icon></pride-icon>
    <honor-icon></honor-icon>
    <sorrow-icon></sorrow-icon>
    <hatred-icon></hatred-icon>
    <humility-icon></humility-icon>
    <shame-icon></shame-icon>
    <desire-icon></desire-icon>
    <benevolence-icon></benevolence-icon>
    <gratitude-icon></gratitude-icon>
    <anger-icon></anger-icon>
    <ambition-icon></ambition-icon>
  </nav>
</template>

<style>
nav.affect-navigation {
  display: flex;
  flex-direction: column;
}

nav .icon-component {
  flex-direction: row;
  width: 100%;
  justify-content: space-start;
  padding: 10px;
}

nav .icon-component i {
  font-size: 18px;
  width: 18px;
}

nav .icon-component p {
  margin: 0 18px;
  text-align: left;
}

nav .icon-component p em {
  color: black;
}
</style>
