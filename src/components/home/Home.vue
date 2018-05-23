<script>
  import Jumbotron from './Jumbotron.vue'
  import Features from './Features.vue'
  import Team from './Team.vue'
  import Contribution from './Contribution.vue'
  import External from './External.vue'

  export default {
    components: {
      jumbotron: Jumbotron,
      features: Features,
      team: Team,
      contribution: Contribution,
      external: External
    }
  }
</script>

<template>
  <div>
    <jumbotron />
    <features />
    <team />
    <external />
    <contribution />
    <!-- contact -->
  </div>
</template>