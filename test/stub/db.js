const fixtures = require('../fixtures')

class IntranetDB {
  setup () {
    return Promise.resolve(true)
  }

  drop () {
    return Promise.resolve(true)
  }

  saveOffice (office) {
    return Promise.resolve(office)
  }

  getOffice (id) {
    return Promise.resolve(fixtures.getOffice())
  }

  getOffices () {
    return Promise.resolve(fixtures.getOffices())
  }

  updateOffice (id) {
    return Promise.resolve(fixtures.getOffice())
  }

  deleteOffice (id) {
    return Promise.resolve(fixtures.getOffice())
  }

  saveProjectCategory (projectCategory) {
    return Promise.resolve(fixtures.getProjectCategory())
  }

  updateProjectCategory (id) {
    return Promise.resolve(fixtures.getProjectCategory())
  }

  deleteProjectCategory (id) {
    return Promise.resolve(fixtures.getProjectCategory())
  }

  saveProject (project) {
    return Promise.resolve(fixtures.getProject())
  }

  getProject (id) {
    return Promise.resolve(fixtures.getProject())
  }

  getProjects () {
    return Promise.resolve(fixtures.getProjects())
  }

  getProjectsByProjectCategory (id) {
    return Promise.resolve(fixtures.getProjects())
  }

  updateProject (id) {
    return Promise.resolve(fixtures.getProject())
  }

  deleteProject (id) {
    return Promise.resolve(fixtures.getProject())
  }

  saveUser (user) {
    return Promise.resolve(fixtures.getUser())
  }

  getUser (username) {
    const user = fixtures.getUser()
    if (username !== user.username) {
      return Promise.reject(new Error('not found'))
    }
    return Promise.resolve(fixtures.getUser())
  }

  getUsers () {
    return Promise.resolve(fixtures.getUsers())
  }

  getUsersByOffice (id) {
    return Promise.resolve(fixtures.getUsers())
  }

  updateUser (username) {
    return Promise.resolve(fixtures.getUser())
  }

  deleteUser (username) {
    return Promise.resolve(fixtures.getUser())
  }

  authenticate (username, password) {
    return Promise.resolve(true)
  }
}

module.exports = IntranetDB
