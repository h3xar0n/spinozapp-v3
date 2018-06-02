<template>
  <div>
    <div :key="solution"
          v-for="solution in $store.state.solutions">
      <p>{{ solution.text }}</p>
      <button v-show="solution.favorite === false"
              @click="solution.favorite = true">
        Favorite
      </button>
      <button v-show="solution.favorite === true"
              @click="solution.favorite = false">
        Unfavorite
      </button>
    </div>
  </div>
</template>
