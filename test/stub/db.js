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
    return fixtures.getOffice()
  }

  async getOffices () {
    return fixtures.getOffices()
  }
}

module.exports = IntranetDB
