<script>
  import ActionIcon from '../icons/ActionIcon'
  import SelfApprovalIcon from '../icons/SelfApprovalIcon'
  import JoyIcon from '../icons/JoyIcon'

  export default {
    components: {
      actionIcon: ActionIcon,
      joyIcon: JoyIcon,
      selfApprovalIcon: SelfApprovalIcon
    }
  }
</script>

<template>
  <article>
    <self-approval-icon/>
    <p><joy-icon/> arising from the thought of our own power of <action-icon/></p>
    <div>Video goes here</div>
    <div>Solutions go here</div>
    <br>
    <h3>Variants:</h3>
    <div>Variants go here</div>
  </article>
</template>
