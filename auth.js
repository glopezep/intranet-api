const { send, json } = require('micro')
const { router, post } = require('microrouter')
const IntranetDB = require('intranet-db')
const utils = require('./lib/utils')
const DbStub = require('./test/stub/db')
const config = require('./config.js')

let db = new IntranetDB()

if (process.env.NODE_ENV !== 'production') {
  db = new DbStub()
}

async function authenticate (req, res) {
  const credentials = await json(req)
  const auth = await db.authenticate(credentials.username, credentials.password)

  if (!auth) {
    return send(res, 401, { error: 'invalid credentials' })
  }

  const payload = { username: credentials.username }
  const token = await utils.signToken(payload, config.secret, {})

  send(res, 200, token)
}

module.exports = router(
  post('/', authenticate)
)
