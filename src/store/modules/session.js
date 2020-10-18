const state = {
  students: [],
  teachers: [],
  user: null,
  online: false,
}

const getters = {
  getUser: (state) => state.user,
  getTeachers: (state) => state.teachers,
  getStudents: (state) => state.students,
  isOnline: (state) => state.online,
}

const actions = {
  get_user({ commit }, user) {
    commit('USER_SUCCESS', user)
  },

  leaveSession({ commit }) {
    commit('LOGOUT')
  },
}

const mutations = {
  USER_SUCCESS: (state, user) => {
    state.user = user
    state.online = true
  },
  LOGOUT: (state) => {
    state.students = []
    state.teachers = []
    state.user = null
    state.online = false
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}