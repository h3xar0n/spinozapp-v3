<template>
  <div v-show="$store.state.affects[$router.history.current.path]">
    <h3>Solutions</h3>
    <div :key="solutionId"
         :class="{favorite: $store.state.solutions[solutionId].favorite}"
          v-for="solutionId in $store.state.affects[$router.history.current.path].solutions">
      <p>{{ $store.state.solutions[solutionId].text }}</p> 
      <button v-show="$store.state.solutions[solutionId].favorite === false"
              @click="$store.state.solutions[solutionId].favorite = true">
        <i class="fas fa-check-circle"></i>
      </button>
      <button v-show="$store.state.solutions[solutionId].favorite === true"
              @click="$store.state.solutions[solutionId].favorite = false">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
    <div :key="dependency"
          v-for="dependency in $store.state.affects[$router.history.current.path].dependencies">
      <br>
      <p>Insofar as {{ $store.state.affects[$router.history.current.path].name }} is a {{ $store.state.affects[dependency].insofar }} with the following: </p>
      <div :key="subSolutionId"
           :class="{favorite: $store.state.solutions[subSolutionId].favorite}"
           v-for="subSolutionId in $store.state.affects[dependency].solutions">
        <p>{{ $store.state.solutions[subSolutionId].text }}</p> 
        <button v-show="$store.state.solutions[subSolutionId].favorite === false"
                @click="$store.state.solutions[subSolutionId].favorite = true">
          <i class="fas fa-check-circle"></i>
        </button>
        <button v-show="$store.state.solutions[subSolutionId].favorite === true"
                @click="$store.state.solutions[subSolutionId].favorite = false">
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  display: inline-flex;
  flex-direction: row;
  padding: 10px;
  cursor: pointer; 
  margin: 5px;
  border: 1px solid #d4d0d0;
  background-image: linear-gradient(-180deg,#fff 33%,#fff8f8 100%);
  border-radius: 6px;
  transition: 0.5s;
}
i {
  font-size: 16px;
}
.fa-check-circle {
  color: lightgreen;
}
.favorite {
 background-color: lightgreen; 
 transition: 0.5s;
}
</style>
