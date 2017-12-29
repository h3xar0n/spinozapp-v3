<template>
    <div>
        <jumbotron />
        <features />
        <team />
        <b-container class="contribution-info">
            <b-row>
                <b-col>
                    <img src="../../assets/gitlab-logo.png" alt="">
                    <h2>Code</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>                </b-col>
                <b-col>
                    <img src="../../assets/content.png" alt="">
                    <h2>Content</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </b-col>
                <b-col>
                    <img src="../../assets/spinoza-money.jpg" alt="">
                    
                    <h2>Cash</h2>
                    <b-progress :value="70" class="w-75 mb-2"></b-progress>
                    <b-progress :value="13" class="w-50 mb-2"></b-progress>
                    <b-progress :value="3" class="w-25"></b-progress>
                </b-col>
            </b-row>
        </b-container>
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

export default {
  components: {
    jumbotron: Jumbotron,
    features: Features,
    team: Team
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
