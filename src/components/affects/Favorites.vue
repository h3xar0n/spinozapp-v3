<template>
  <aside>
    <div @click="solution.favorite = false"
         :key="solution" v-for="solution in $store.state.solutions" v-show="solution.favorite">
      <i class="fas fa-check-circle"></i>
      <br>
      <p>{{ solution.text }}</p>
    </div>
  </aside>  
</template>

<style scoped>
div {
  display: flex;
  cursor: pointer; 
  transition: 0.5s;
}
div * {
  margin-left: 10px;
}
i {
  font-size: 16px;
}
</style>
