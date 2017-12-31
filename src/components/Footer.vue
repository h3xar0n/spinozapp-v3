<template>
  <footer>
    <span class="legal">
      &#9774; 2017-2018 Aron Eidelman
    </span>
    <span class="right-icons">
      <a href="https://gitlab.com/eideldev/spinozapp"
         target="_blank">
        <i class="devicon-gitlab-plain"></i>
      </a>  
    </span>
  </footer>
</template>

<style scoped>
  footer {
    color: white;
    background: #313d3e;
    height: 120px;
    padding: 25px;
  }

  .legal {
    padding-top: 10px;
    position: absolute;
    left:10vw;
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
