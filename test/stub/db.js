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

  async deleteOffice (id) {
    return Promise.resolve(fixtures.getOffice())
  }
}

module.exports = IntranetDB
