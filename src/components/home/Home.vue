<template>
    <div>
        <jumbotron />
        <features />
        <team />
        <contribution />
        <b-container class="external-videos">
            <b-row>
                <b-col>
                    <b-embed type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/iUlz8ZjZlf0"
                            allowfullscreen
                    ></b-embed>
                </b-col>
                <b-col>
                    <b-embed type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/pVEeXjPiw54"
                            allowfullscreen
                    ></b-embed>
                </b-col>
                <b-col>
                    <b-embed type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/pVEeXjPiw54"
                            allowfullscreen
                    ></b-embed>
                </b-col>
            </b-row>
        </b-container>
        <!-- external links -->
        <!-- contact form -->
    </div>
</template>

<script>
import Jumbotron from './Jumbotron.vue'
import Features from './Features.vue'
import Team from './Team.vue'
import Contribution from './Contribution.vue'

export default {
  components: {
    jumbotron: Jumbotron,
    features: Features,
    team: Team,
    contribution: Contribution
  }
}
</script>

<style>
.features-info {
    margin-top: 30px;
}
.contribution-info img {
    height: 100px;
    width: auto;
}
</style>
