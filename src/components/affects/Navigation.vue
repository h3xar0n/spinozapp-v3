<script>
import AffectIcon from './icons/AffectIcon.vue'
import SorrowIcon from './icons/SorrowIcon.vue'
import JoyIcon from './icons/JoyIcon.vue'
import DesireIcon from './icons/DesireIcon.vue'
import PassionIcon from './icons/PassionIcon.vue'
import ActionIcon from './icons/ActionIcon.vue'

export default {
  components: {
    affectIcon: AffectIcon,
    sorrowIcon: SorrowIcon,
    joyIcon: JoyIcon,
    desireIcon: DesireIcon,
    passionIcon: PassionIcon,
    actionIcon: ActionIcon
  }
};
</script>

<template>
  <nav class="affect-navigation">
    <affect-icon></affect-icon>
    <action-icon></action-icon>
    <passion-icon></passion-icon>
    <joy-icon></joy-icon>
    <sorrow-icon></sorrow-icon>
    <desire-icon></desire-icon>
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
