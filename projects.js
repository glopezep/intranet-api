const { send, json } = require('micro')
const { router, post, get } = require('microrouter')
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

const getProject = async function getProject (req, res) {
  const id = req.params.id
  const project = await db.getProject(id)
  send(res, 200, project)
}

const getProjects = async function getProjects (req, res) {
  const projects = await db.getProjects()
  send(res, 200, projects)
}

module.exports = router(
  post('/save', saveProject),
  get('/list', getProjects),
  get('/:id', getProject)
)
