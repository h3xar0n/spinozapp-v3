<script>
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import DesireIcon from '../icons/DesireIcon'
  import PassionIcon from '../icons/PassionIcon'

  export default {
    components: {
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      desireIcon: DesireIcon,
      passionIcon: PassionIcon
    }
  }
</script>

<template>
  <article>
    <desire-icon></desire-icon>
    <p>
      The essence of what we are, each <affect-icon></affect-icon> tests our power to continue striving, 
      and is an <action-icon></action-icon> or <passion-icon></passion-icon> based on whether it pertains 
      solely to our essence.
    </p>
    <div>Video goes here</div>
    <div>Solutions go here</div>
    <br>
    <h3>Variants:</h3>
    <div>Variants go here</div>
  </article>
</template>

