<template>
    <div class="approach">
        <div class="container">
            <div class="row">
                <div class="detail-card col-xs-12 col-md-4">
                    <div v-if="affect === 'passion'">
                        <b-card title="Passion"
                                img-alt="Image"
                                img-top
                                tag="article"
                                class="mb-2">
                            <img src="../../assets/spinoza-money.jpg" alt="" style="max-width: 100%;">
                            <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <b-button href="#" variant="primary">Find a resolution</b-button>
                            <br>
                            <br>
                            <b-button href="#" variant="primary">Read in the Ethics</b-button>
                        </b-card>
                    </div>
                    <div v-if="affect === 'action'">
                        <b-card title="Action"
                                img-alt="Image"
                                img-top
                                tag="article"
                                class="mb-2">
                            <img src="../../assets/content.png" alt="" style="max-width: 100%;">
                            <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <b-button href="#" variant="primary">Find a resolution</b-button>
                            <br>
                            <br>
                            <b-button href="#" variant="primary">Read in the Ethics</b-button>
                        </b-card>
                    </div>
                </div>
                <div class="affect-graph col-xs-12 col-md-8">
                    <b-button @click="affect = 'passion'">Passion</b-button>
                    <b-button @click="affect = 'action'">Action</b-button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          affect: 'passion'
        }
      }
    }
</script>