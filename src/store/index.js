import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import session from './modules/session'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    session,
  },
  plugins: [
    createPersistedState()
  ]
})