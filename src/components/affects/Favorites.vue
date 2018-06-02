<template>
  <aside>
    <div :key="solution" v-for="solution in $store.state.solutions" v-show="solution.favorite">
      <p>{{ solution.text }}</p>
      <button @click="solution.favorite = false">Put back</button>
    </div>
  </aside>  
</template>
