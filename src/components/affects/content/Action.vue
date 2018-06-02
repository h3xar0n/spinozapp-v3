<script>
  import ActionIcon from '../icons/ActionIcon'
  import AffectIcon from '../icons/AffectIcon'
  import AffectInv from '../involvements/AffectInv'
  import CourageIcon from '../icons/CourageIcon'
  import NobilityIcon from '../icons/NobilityIcon'
  import SelfApprovalIcon from '../icons/SelfApprovalIcon'

  export default {
    components: {
      actionIcon: ActionIcon,
      affectIcon: AffectIcon,
      affectInvolvement: AffectInv,
      courageIcon: CourageIcon,
      nobilityIcon: NobilityIcon,
      selfApprovalIcon: SelfApprovalIcon
    }
  }
</script>

<template>
  <article>
    <action-icon></action-icon>
    <p>An action is an <affect-icon></affect-icon> that is a power of the mind based on our nature.</p>
    <div>Video goes here</div>
    <affect-involvement></affect-involvement>
    <br>
    <h3>Involvements:</h3>
    <div class="involvements">
      <courage-icon></courage-icon>
      <nobility-icon></nobility-icon>
      <self-approval-icon></self-approval-icon>
    </div>
  </article>
</template>

<style>
  .involvements {
    display: flex;
    justify-content: space-around
  }
</style>
