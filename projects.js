const { send, json } = require('micro')
const { router, post } = require('microrouter')
const IntranetDB = require('intranet-db')
const DbStub = require('./test/stub/db')

let db = new IntranetDB()

if (process.env.NODE_ENV !== 'production') {
  db = new DbStub()
}

const saveProject = async function saveProject (req, res) {
  const project = await json(req)
  const created = await db.saveProject(project)
  send(res, 201, created)
}

module.exports = router(
  post('/save', saveProject)
)
