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


export default {
  state,
  getters
}