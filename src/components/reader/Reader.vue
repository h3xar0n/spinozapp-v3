<template>
  <div>
    <div class="book-nav">
        <b-button>Book 1</b-button>
        <b-button>Book 2</b-button>
        <b-button>Book 3</b-button>
        <b-button>Book 4</b-button>
        <b-button>Book 5</b-button>
    </div>
    <!-- <router-view /> -->
    <div class="row approach">
      <div class="col-xs-3 col-md-3">
        <h2>Dependencies</h2>
      </div>
      <div class="col-xs-6 col-md-6 detail-card">
        <b-card title="Card Title" img-src="https://lorempixel.com/600/300/food/5/" img-alt="Image" img-top tag="article" class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="col-xs-3 col-md-3">
        <h2>Involvements</h2>
      </div>
    </div>
  </div>
</template>

<style>
  .card {
    width: 100%
  }

  .book-nav {
    margin-top: 10px;
  }

  .book-nav button {
    background-color: #35495e;
    font-size: 10px;
  }
  .book-nav button:hover, .book-nav button:active {
    color: #35495e;
    background-color: white;
  }

</style>
