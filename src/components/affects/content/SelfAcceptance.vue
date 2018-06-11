<script>
  import ActionIcon from '../icons/ActionIcon'
  import SelfAcceptanceIcon from '../icons/SelfAcceptanceIcon'
  import JoyIcon from '../icons/JoyIcon'

  export default {
    components: {
      actionIcon: ActionIcon,
      joyIcon: JoyIcon,
      selfAcceptanceIcon: SelfAcceptanceIcon
    }
  }
</script>

<template>
  <article>
    <self-acceptance-icon/>
    <p><joy-icon/> arising from the thought of our own power of <action-icon/></p>
    <div>Video goes here</div>
    <div>Solutions go here</div>
    <br>
    <h3>Variants:</h3>
    <div>Variants go here</div>
  </article>
</template>
