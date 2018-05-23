<template>
  <div class="features-info">
    <ul class="list-unstyled">
      <div class="team-member">
        <img src="../../assets/adelina.jpg" alt="" class="team-image">
        <div class="team-content">
          <h5>Adelina</h5>
          <p>A makeup artist and hairstylist with a penchant for UI design, color theory, and painting, Adelina
            guides the visual design choices on Spinozapp.</p>
        </div>
      </div>
      <br>
      <br>
      <br>
      <div class="team-member">
        <img src="../../assets/aron.jpg" alt="" class="team-image">
        <div class="team-content">
          <h5>Aron</h5>
          <p>A software engineer who still reads actual books, Aron leads development, 
            system design, and content for Spinozapp. His interests include the application of
            Spinoza's ideas to computer science.
          </p>
        </div>
      </div>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    background-image: linear-gradient(-180deg,#fff 33%,#fff8f8 100%);
    padding: 66px 0;
    margin-bottom: 0;
  }
  .team-member {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 67vw;
    margin: 0 auto;
  }
  @media (max-width: 1060px) {
    .team-member {
      width: 80vw;
      flex-basis: 426px;
    }
  }
  .team-image {
    border-radius: 20px;
    width: 200px;
    height: 200px;
  }
  .team-content {
    text-align: left;
    margin: 0 20px;
    flex: 2;
  }
  @media (max-width: 400px) {
    .team-content h5 {
      margin-top: 20px;
      text-align: center;
    }
  }
</style>

