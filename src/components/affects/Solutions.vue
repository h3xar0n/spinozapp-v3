<template>
  <div v-show="$store.state.affects[$router.history.current.path]">
    <h3>Solutions</h3>
    <div :key="solutionId"
          v-for="solutionId in $store.state.affects[$router.history.current.path].solutions">
      <p>{{ $store.state.solutions[solutionId].text }}</p> 
      <button v-show="$store.state.solutions[solutionId].favorite === false"
              @click="$store.state.solutions[solutionId].favorite = true">
        Favorite
      </button>
      <button v-show="$store.state.solutions[solutionId].favorite === true"
              @click="$store.state.solutions[solutionId].favorite = false">
        Unfavorite
      </button>
    </div>
    <div :key="dependency"
         v-for="dependency in $store.state.affects[$router.history.current.path].dependencies">
      <p>{{ dependency }}</p>
      <!-- <div :key="subSolutionId"
           v-for="subSolutionId in $store.state.affects[dependency].solutions">
        <p>{{ $store.state.solutions[subSolutionId].text }}</p> 
        <button v-show="$store.state.solutions[subSolutionId].favorite === false"
                @click="$store.state.solutions[subSolutionId].favorite = true">
          Favorite
        </button>
        <button v-show="$store.state.solutions[subSolutionId].favorite === true"
                @click="$store.state.solutions[subSolutionId].favorite = false">
          Unfavorite
        </button>
      </div> -->
    </div>
  </div>
</template>
