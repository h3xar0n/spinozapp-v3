<script>
  import ActionIcon from '../icons/ActionIcon'
  import JoyIcon from '../icons/JoyIcon'
  import DesireIcon from '../icons/DesireIcon'
  import PassionIcon from '../icons/PassionIcon'
  import GratitudeIcon from '../icons/GratitudeIcon'
  import LoveIcon from '../icons/LoveIcon'

  export default {
    components: {
      actionIcon: ActionIcon,
      joyIcon: JoyIcon,
      desireIcon: DesireIcon,
      passionIcon: PassionIcon,
      gratitudeIcon: GratitudeIcon,
      loveIcon: LoveIcon
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
    <div>Video goes here</div>
    <div>Solutions go here</div>
    <br>
    <h3>Variants:</h3>
    <div>Variants go here</div>
  </article>
</template>
