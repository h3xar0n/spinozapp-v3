<script>
  import CourageIcon from '../icons/CourageIcon'
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import DesireIcon from '../icons/DesireIcon'
  import JoyIcon from '../icons/JoyIcon'

  export default {
    components: {
      courageIcon: CourageIcon,
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      desireIcon: DesireIcon,
      joyIcon: JoyIcon
    }
  }
</script>

<template>
  <article>
    <courage-icon></courage-icon>
    <p>An <action-icon></action-icon> pertaining to reasonable <desire-icon></desire-icon> and <joy-icon></joy-icon> of others.</p>
    <blockquote>
      Definition goes here
    </blockquote>
    <div>Video goes here</div>
    <div>Solutions go here</div>
    <br>
    <h3>Variants:</h3>
    <div>Variants go here</div>
  </article>
</template>
