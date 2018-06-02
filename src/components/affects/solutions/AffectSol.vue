<template>
  <div>
    <div :key="solution"
          v-for="solution in $store.state.affects.affect" 
          v-show="solution.selection === 'normal'">
      <p>{{ solution.text }}</p>
      <button @click="solution.selection = 'favorite'">
        Favorite
      </button>
      <button @click="solution.selection = 'hidden'">
        Hide
      </button>
    </div>
  </div>
</template>
