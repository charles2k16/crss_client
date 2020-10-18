const state = {
  students: [],
  teacher: null,
  user: null,
  online: false,
}

const getters = {
  getUser: (state) => state.user,
  getTeacher: (state) => state.teacher,
  getStudents: (state) => state.students,
  isOnline: (state) => state.online,
}

const actions = {
  get_user({ commit }, user) {
    commit('USER_SUCCESS', user)
  },

  get_teacher({ commit }, teacher) {
    commit('TEACHER_PRESENT', teacher)
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
  TEACHER_PRESENT: (state, teacher) => {
    state.teacher = teacher
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