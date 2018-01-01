<template>
  <div class="contribution-wrapper">
    <b-container class="contribution-info">
      <b-row>
        <b-col sm="12" md="6">
          <img src="../../assets/gitlab-logo.png" alt="">
          <h3 class="subtitle">Development</h3>
          <p>Whether it's refactoring our components or adding new features, there is always more work to be done behind
            the scenes. Check out our <a href="https://gitlab.com/eideldev/spinozapp/milestones" target="_blank">issues</a>, 
            fork our <a href="https://gitlab.com/eideldev/spinozapp" target="_blank">repo</a>, and <a href="mailto:aron@eideldev.com">
              contact us</a> if you have new ideas!</p>
          <div class="code-tools">
              <div>
                <i class="devicon-vuejs-plain colored"></i>
                <p>Vue</p>  
              </div>
              <div>
                <i class="devicon-d3js-plain colored"></i>
                <p>D3</p>
              </div>
              <div>
                <i class="devicon-sass-original colored"></i>
                <p>Sass</p>
              </div>
          </div>
        </b-col>
        <b-col sm="12" md="6">
          <img src="../../assets/spinoza-money.png" alt="">
          <h3 class="subtitle">Donations</h3>
          <p>
            Our goal is to get a custom domain name with one email address and HTTPS protection. 
            This will allow us to add new features, such as creating user profiles. 
            Any excess proceeds will go to the <a href="https://www.chp-sf.org/about/" target="_blank">Community Housing Partnership</a>.
          </p>
          <div class="goals">
            <span>Hosting plan</span>
            <b-progress :value="20" class="w-75" />
            <span>Custom domain with HTTPS</span>
            <b-progress :value="13" class="w-50" />
            <span>Email</span>
            <b-progress :value="3" class="w-25" />
          </div>
          <br>
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
  .contribution-wrapper {
    padding: 66px 0;
    background-image: linear-gradient(-180deg, #fff 33%, #fff8f8 100%);
  }

  .contribution-info p {
    text-align: left;
  }

  .contribution-info img {
    height: 100px;
    width: auto;
  }

  .subtitle {
    margin-top: 10px;
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

  .code-tools div {
    display: inline-block;
  }

  .code-tools div:nth-child(2) {
    margin: 0 15%;
  }

  .code-tools i {
    font-size: 70px;
    padding: 0
  }

  .code-tools p {
    font-family: monospace;
    color: #fff9f9;
    margin: 0 auto;
    text-align: center;
  }

  .goals {
    font-size: 12px;
    text-align: left;
  }

</style>
