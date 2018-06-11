<template>
  <div v-show="$store.state.affects[$router.history.current.path]" class="meditations-panel">
    <h3 class="panel-title">Meditations</h3>
    <div :key="solutionId"
         class="solution-text"
         :class="{favorite: $store.state.solutions[solutionId].favorite}"
         @click="$store.state.solutions[solutionId].favorite = !$store.state.solutions[solutionId].favorite"
         v-for="solutionId in $store.state.affects[$router.history.current.path].solutions">
      <i v-show="$store.state.solutions[solutionId].favorite === false"
          class="far fa-check-circle"></i>
      <i v-show="$store.state.solutions[solutionId].favorite === true"
          class="fas fa-check-circle"></i>
      <p>{{ $store.state.solutions[solutionId].text }}</p> 
    </div>
    <div :key="dependency"
          v-for="dependency in $store.state.affects[$router.history.current.path].dependencies">
      <br>
      <p>Insofar as {{ $store.state.affects[$router.history.current.path].name }} involves {{ $store.state.affects[dependency].insofar }} with the same thoughts: </p>
      <div :key="subSolutionId"
           class="solution-text"
           :class="{favorite: $store.state.solutions[subSolutionId].favorite}"
           @click="$store.state.solutions[subSolutionId].favorite = !$store.state.solutions[subSolutionId].favorite"
           v-for="subSolutionId in $store.state.affects[dependency].solutions">
        <i v-show="$store.state.solutions[subSolutionId].favorite === false"
           class="far fa-check-circle"></i>
        <i v-show="$store.state.solutions[subSolutionId].favorite === true"          
           class="fas fa-check-circle"></i>
        <p>{{ $store.state.solutions[subSolutionId].text }}</p> 
      </div>
    </div>
  </div>
</template>

<style scoped>
i {
  font-size: 32px;
  color: lightgray;
}
.fas.fa-check-circle {
  color: #54b854;
}
.solution-text:hover .far.fa-check-circle {
  color: #54b854;
  transition: 0.5s;
}
.favorite {
  background-color: #ddf3dd;
  transition: 0.5s;
}
.solution-text p {
  margin: 0;
}
.solution-text p,
.solution-text {
  text-align: left;
}
.solution-text {
  display: flex;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;
}
.solution-text * {
  padding-right: 10px;
}
.meditations-panel p {
  text-align: left;
}
</style>
