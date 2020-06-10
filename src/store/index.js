import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    attempts: []
  },
  mutations: {
    ADD_ATTEMPT(state, payload) {
      state.attempts.push(payload);
    }
  },
  actions: {
    addAttempt(context, letter) {
      context.commit("ADD_ATTEMPT", letter);
    }
  },
  modules: {
  }
})
