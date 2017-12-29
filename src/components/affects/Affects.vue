<template>
    <div class="approach">
        <b-button-group>
            <b-button>Passion</b-button>
            <b-button>Action</b-button>
        </b-button-group>
        <div class="container">
            <div class="row">
                <div class="detail-card col-xs-12 col-md-4">
                    <div>
                        <b-card title="Card Title"
                                img-src="https://lorempixel.com/600/300/food/5/"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                            <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <b-button href="#" variant="primary">Go somewhere</b-button>
                        </b-card>
                    </div>
                </div>
                <div class="affect-graph col-xs-12 col-md-8">
                    <img src="http://blogs.reuters.com/emanuelderman/files/2011/06/The-Emotions-Map.MBB2page.31.jpg" alt=""/>
                </div>
                <b-card-group deck>
                    <b-card title="Title"
                            img-src="https://lorempixel.com/300/300/"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <div slot="footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </b-card>
                    <b-card title="Title"
                            img-src="https://lorempixel.com/300/300/"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                            This card has supporting text below as a natural lead-in
                            to additional content.
                        </p>
                        <div slot="footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </b-card>
                    <b-card title="Title"
                            img-src="https://lorempixel.com/300/300/"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This card has even longer content
                            than the first to show that equal height action.
                        </p>
                        <div slot="footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </b-card>
                </b-card-group>
            </div>
        </div>
    </div>
</template>