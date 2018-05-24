<template>
  <router-view></router-view>
</template>

<style>
.affect-video {
  border-radius: 16px;
  width: 80vw;
  max-width: 800px;
  height: 45vw;
  max-height: 450px;
}
article {
  width: 80vw;
  margin: auto;
}
article > * {
  margin: 1vw auto;
  max-width: 800px;
}
p {
  text-align: left;
}
.related {
  display: flex;
  justify-content: space-around;
}
ion-icon {
  font-size: 60px;
}
</style>
