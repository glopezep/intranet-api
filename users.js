const { send, json } = require('micro')
const { router, post, get } = require('microrouter')
const IntranetDB = require('intranet-db')
const DbStub = require('./test/stub/db')

let db = new IntranetDB()

if (process.env.NODE_ENV !== 'production') {
  db = new DbStub()
}

async function saveUser (req, res) {
  const user = await json(req)
  const result = await db.saveUser(user)
  send(res, 201, result)
}

async function getUser (req, res) {
  const username = req.params.username
  const result = await db.getUser(username)
  send(res, 200, result)
}

async function getUsers (req, res) {
  const result = await db.getUsers()
  send(res, 200, result)
}

async function getUsersByOffice (req, res) {
  const id = req.params.id
  const result = await db.getUsersByOffice(id)
  send(res, 200, result)
}

module.exports = router(
  get('/office/:id/users', getUsersByOffice),
  post('/save', saveUser),
  get('/list', getUsers),
  get('/:username', getUser)
)
