import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    ADD_ENTRIES(state, newEntry) {
      state.results.push(newEntry);
      state.results.sort((a, b) => {
        if (a.score > b.score)
          return 1;
        else if (a.score < b.score)
          return -1;
        else
          return;
      });
    }
  },
  actions: {
    addEntries({ commit }, newEntry) {
      commit("ADD_ENTRIES", newEntry);
    }
  },
});
