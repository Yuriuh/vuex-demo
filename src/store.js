import Vue from 'vue'
import Vuex from 'vuex'
import { setTimeout } from 'core-js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increase () {
      this.state.count += 1
    },
    decrease () {
      this.state.count -= 1
    }
  },
  actions: {
    decreaseAsync (context) {
      setTimeout(() => {
        context.commit('decrease')
      }, 2000)
    }
  }
})
