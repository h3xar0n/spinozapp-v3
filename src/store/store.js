import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  affects: {
  },
  solutions: {
    1: {
      favorite: true,
      text: 'We can re-order the ideas that we have'
    },
    2: {
      favorite: false,
      text: 'Here we go with v-if'
    },
    3: {
      favorite: false,
      text: 'Testing'
    },
    4: {
      favorite: false,
      text: 'A different affect'
    }
  }
}

export default new Vuex.Store({
  state
})
