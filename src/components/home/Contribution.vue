<template>
  <div class="contribution-wrapper">
    <b-container class="contribution-info">
      <b-row>
        <b-col sm="12" md="4">
          <img src="../../assets/gitlab-logo.png" alt="">
          <h3>Code</h3>
          <p>Whether it's refactoring our components or adding huge new features, there is always more work to be done behind the scenes. Check out our issues, fork our repo, and contact us if you have new ideas!</p>
          <div class="code-tools">
            <p>
              <i class="devicon-vuejs-plain colored"></i>
              <i class="devicon-d3js-plain colored"></i>
              <i class="devicon-sass-original colored"></i>
            </p>
            <p>
              <span>Vue</span> 
              <span id="d3">D3</span> 
              <span>Sass</span>
            </p>
          </div>
        </b-col>
        <b-col sm="12" md="4">
          <img src="../../assets/content.png" class="net" alt="">
          <h3>Content</h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </b-col>
        <b-col sm="12" md="4">
          <img src="../../assets/spinoza-money.jpg" alt="">
          <h3>Donations</h3>
          <b-progress :value="70" class="w-75 mb-2" />
          <b-progress :value="13" class="w-50 mb-2" />
          <b-progress :value="3" class="w-25" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
  .contribution-wrapper {
    padding: 66px 0;
    background-image: linear-gradient(-180deg,#fff 33%,#fff8f8 100%);
  }
  .contribution-info p {
    text-align: left;
  }
  .contribution-info img {
    height: 100px;
    width: auto;
  }
  .progress-bar {
    background-color: #f6be0b;
  }
  .code-tools {
    margin: 20px 0;
    padding: 20px 0;
    border-radius: 10px;
    transition: 0.2s;
  }
  .code-tools:hover {
    background-color: #313d3e;
    transition: 0.2s;
  }
  .code-tools i {
    font-size: 50px;
    padding: 0
  }
  .devicon-d3js-plain {
    margin: 0px 40px;
  }
  .code-tools p {
    font-family: monospace;
    color: #fff9f9;
    margin: 0 auto;
    text-align: center;
  }
  #d3 {
    margin: 0 70px;
  }
</style>
