<template>
  <aside>
    <div :key="solution" v-for="solution in $store.state.solutions" v-show="solution.favorite">
      <p>{{ solution.text }}</p>
      <button @click="solution.favorite = false">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </aside>  
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
</style>
