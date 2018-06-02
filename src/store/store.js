import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  affects: {
    affect: {
      1: {
        selection: 'favorite',
        text: 'We can re-order the ideas that we have'
      },
      2: {
        selection: 'favorite',
        text: 'Here we go with v-if'
      },
      3: {
        selection: 'normal',
        text: 'Testing'
      }
    },
    action: {
      4: {
        selection: 'favorite',
        text: 'A different affect'
      }
    }
  }
}

export default new Vuex.Store({
  state
})
