<template>
    <div>
        <div>
            <b-embed type="iframe"
                    aspect="16by9"
                    src="https://www.youtube.com/embed/pVEeXjPiw54"
                    allowfullscreen
            ></b-embed>
        </div>
        <b-container class="features-info">
            <b-row>
                <b-col>
                    <h2>Affects</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <b-button to="/affects">Affects</b-button>
                </b-col>
                <b-col>
                    <h2>Reader</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <b-button to="/reader">Reader</b-button>        
                </b-col>
                <b-col>
                    <h2>Graph</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <b-button to="/graph">Graph</b-button>
                </b-col>
            </b-row>
        </b-container>
        <br>
        <br>
        <ul class="list-unstyled">
            <b-media tag="li">
                <b-img slot="aside" blank blank-color="#abc" width="200" alt="placeholder" />
                <h5 class="mt-0 mb-1">Aroshka</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                lacinia congue felis in faucibus.
            </b-media>
            <b-media tag="li" class="my-4">
                <b-img slot="aside" blank blank-color="#cba" width="200" alt="placeholder" />
                <h5 class="mt-0 mb-1">Adelinchik</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                lacinia congue felis in faucibus.
            </b-media>
            <b-media tag="li">
                <b-img slot="aside" blank blank-color="#bac" width="200" alt="placeholder" />
                <h5 class="mt-0 mb-1">Spinoza</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                lacinia congue felis in faucibus.
            </b-media>
        </ul>
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
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </b-col>
            </b-row>
        </b-container>
        <!-- external videos -->
        <!-- external links -->
        <!-- contact form -->
    </div>
</template>

<style>
.features-info {
    margin-top: 30px;
}
.contribution-info img {
    height: 100px;
    width: auto;
}
</style>
