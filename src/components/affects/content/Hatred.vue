<script>
  import PassionIcon from '../icons/PassionIcon'
  import SorrowIcon from '../icons/SorrowIcon'
  import HatredIcon from '../icons/HatredIcon'

  export default {
    components: {
      passionIcon: PassionIcon,
      sorrowIcon: SorrowIcon,
      hatredIcon: HatredIcon
    }
  }
</script>

<template>
  <article>
    <hatred-icon></hatred-icon>
    <p><sorrow-icon/> accompanied by the idea of an external cause. While necessarily a <passion-icon/>, the idea of the external cause may not be the (only) actual cause.</p>
    <div>Video goes here</div>
    <div>Solutions go here</div>
    <br>
    <h3>Variants:</h3>
    <div>Variants go here</div>
  </article>
</template>
