<template>
  <section class="contribution-wrapper">
    <div class="container contribution-info">
      <div class="row">
        <article class="col-sm-12 col-md-6">
          <img src="../../assets/content.png" alt="">
          <h3 class="subtitle">Development</h3>
          <p>Whether it's refactoring our components or adding new features, there is always more work to be done behind the
            scenes. Check out our
            <a href="https://gitlab.com/eideldev/spinozapp/milestones" target="_blank">issues</a>, fork our
            <a href="https://gitlab.com/eideldev/spinozapp" target="_blank">repo</a>, and
            <a href="mailto:aron@eideldev.com">
              contact us</a> if you have new ideas! These are our main tools:</p>
          <div class="code-tools">
            <div>
              <a href="https://vuejs.org/" target="_blank">
                <i class="devicon-vuejs-plain colored"></i>
                <p>Vue</p>
              </a>
            </div>
            <div>
              <a href="https://about.gitlab.com/" target="_blank">
                <i class="fab fa-gitlab"></i>
                <p>GitLab</p>
              </a>
            </div>
            <div>
              <a href="https://algolia.com/" target="_blank">
                <i class="fab fa-algolia"></i>
                <p>Algolia</p>
              </a>
            </div>
            
          </div>
        </article>
        <article class="col-sm-12 col-md-6">
          <img src="../../assets/spinoza-money.png" alt="">
          <h3 class="subtitle">Donations</h3>
          <p>
            Our goal is to get a custom domain, an email address, and HTTPS. We're also aiming to use Heroku to serve an API. This will
            allow us to add new features, such as user profiles, comments, and search. If we exceed our goal, proceeds will
            go to the
            <a href="https://www.chp-sf.org/about/" target="_blank">Community Housing Partnership</a>.
          </p>
          <div class="goals">
            <span>Firebase hosting</span>
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="20"></div>
            </div>
            <span>Custom domain</span>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="40"></div>
            </div>
            <span>HTTPS</span>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span>Email</span>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <br>
        </article>
      </div>
    </div>
  </section>
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
    background-color: #f6be0b!important;
  }

  .code-tools {
    margin: 20px 0;
    padding: 20px 0;
    border-radius: 10px;
    transition: 0.2s;
  }

  .fa-algolia {
    color: #257BED;
  }

  .fa-gitlab {
    color: #fca326;
  }

  .code-tools:hover {
    background-color: #313d3e;
    transition: 0.2s;
  }

  .code-tools div {
    display: inline-block;
  }

  .code-tools div a:hover {
    text-decoration: none;
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
