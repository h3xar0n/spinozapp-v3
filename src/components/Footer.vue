<template>
  <footer class="dark-block">
    <span class="legal">
      <a href="https://en.wikipedia.org/wiki/Copyleft">
        <span class="copyleft" title="copyleft">&copy;</span>
      </a> 
      2018 Aron Eidelman. All site content and source code may be distributed and modified freely, but not for commercial gain. 
      The GitLab logo and wordmark artwork are licensed under a 
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</a>
    </span>
    <span class="right-icons">
      <a href="https://gitlab.com/eideldev/spinozapp" target="_blank">
        <i class="devicon-gitlab-plain"></i>
      </a>
    </span>
  </footer>
</template>

<style scoped>
  footer {
    height: 120px;
    padding: 25px;
  }

  .copyleft {
    font-size: 16px;
    display: inline-block;
    transform: rotate(180deg);
  }

  .legal, .legal a {
    color: white;
  }
  
  .legal {
    padding-top: 10px;
    position: absolute;
    left: 10vw;
    width: 50VW;
    font-size: 12px;
    text-align: left;
  }

  .right-icons {
    position: absolute;
    right: 10vw;
  }

  .right-icons a {
    color: white;
    text-decoration: none;
    font-size: 40px;
  }

  .right-icons a:hover {
    color: #f6be0b;
    transition: 0.3s;
    text-decoration: none;
  }

</style>
