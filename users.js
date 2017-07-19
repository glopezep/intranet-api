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

module.exports = router(
  post('/save', saveUser),
  get('/:username', getUser)
)