<template>
  <aside>
    <div :key="affect" v-for="affect in $store.state.affects">
      <div :key="solution" v-for="solution in affect" v-show="solution.selection === 'favorite'">
        <p>{{ solution.text }}</p>
        <button @click="solution.selection = 'normal'">Put back</button>
      </div>
    </div>
  </aside>  
</template>
