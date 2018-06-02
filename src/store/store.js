import Vue from 'vue'
import Vuex from 'vuex'
import { solutions } from './solutions'

Vue.use(Vuex)

const state = {
  affects: {
  }, 
  solutions
}

export default new Vuex.Store({
  state
})
