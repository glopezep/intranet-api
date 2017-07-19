const fixtures = require('../fixtures')

class IntranetDB {
  async setup () {
    return Promise.resolve(true)
  }

  async drop () {
    return Promise.resolve(true)
  }

  async saveOffice (office) {
    return Promise.resolve(office)
  }

  async getOffice (id) {
    return Promise.resolve(fixtures.getOffice())
  }

  async getOffices () {
    return Promise.resolve(fixtures.getOffices())
  }

  async updateOffice (id) {
    return Promise.resolve(fixtures.getOffice())
  }

  async deleteOffice (id) {
    return Promise.resolve(fixtures.getOffice())
  }

  async saveProjectCategory (projectCategory) {
    return Promise.resolve(fixtures.getProjectCategory())
  }

  async updateProjectCategory (id) {
    return Promise.resolve(fixtures.getProjectCategory())
  }

  async deleteProjectCategory (id) {
    return Promise.resolve(fixtures.getProjectCategory())
  }

  async saveProject (project) {
    return Promise.resolve(fixtures.getProject())
  }

  async getProject (id) {
    return Promise.resolve(fixtures.getProject())
  }

  async getProjects () {
    return Promise.resolve(fixtures.getProjects())
  }

  async getProjectsByProjectCategory (id) {
    return Promise.resolve(fixtures.getProjects())
  }

  async updateProject (id) {
    return Promise.resolve(fixtures.getProject())
  }

  async deleteProject (id) {
    return Promise.resolve(fixtures.getProject())
  }

  async saveUser (user) {
    return Promise.resolve(fixtures.getUser())
  }

  async getUser (username) {
    const user = fixtures.getUser()
    if (username !== user.username) {
      return Promise.reject(new Error('not found'))
    }
    return Promise.resolve(fixtures.getUser())
  }

  async getUsers () {
    return Promise.resolve(fixtures.getUsers())
  }
}

module.exports = IntranetDB
