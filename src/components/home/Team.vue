<template>
  <ul class="list-unstyled">
    <div class="team-member">
      <img src="../../assets/adelina.jpg" alt="" class="team-image">
      <div class="team-content">
        <h5>Adelina</h5>
        <p>A makeup artist and hairstylist with a penchant for UI design, color theory, and painting, Adelina
          guides the visual design choices on Spinozapp. Her philosophical interests include the distinct conceptions of virtue
          in Spinoza and Machiavelli, as well as how to view works of art <i>sub specie aeternitatas</i> (under the aspect of eternity).
        </p>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="team-member">
      <img src="../../assets/aron.jpg" alt="" class="team-image">
      <div class="team-content">
        <h5>Aron</h5>
        <p>A software engineer with a lifelong devotion to philosophy, Aron sees the potential of life within lines of code.
          He leads development, system design, and content for Spinozapp. His interests include the application of
          Spinoza's ontology to computer science, and how technology can help people foster ethical reasoning skills.
        </p>
      </div>
    </div>
  </ul>
</template>

<style scoped>
  .media {
    padding: 40px 80px 40px 80px;
  }
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
    width: 80vw;
    margin: 0 10vw;
  }
  .team-image {
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

