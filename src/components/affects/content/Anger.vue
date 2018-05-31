<script>
  import AngerIcon from '../icons/AngerIcon'
  import HatredIcon from '../icons/HatredIcon'
  import DesireIcon from '../icons/DesireIcon'

  export default {
    components: {
      angerIcon: AngerIcon,
      hatredIcon: HatredIcon,
      desireIcon: DesireIcon
    }
  }
</script>

<template>
  <article>
    <anger-icon></anger-icon>
    <p>A <desire-icon></desire-icon> to injure or destroy the object of our <hatred-icon></hatred-icon>.</p>
    <div>Video goes here</div>
    <div>Solutions go here</div>
    <br>
    <h3>Variants:</h3>
    <div>Variants go here</div>
  </article>
</template>
