const { send, json } = require('micro')
const { router, get, post } = require('microrouter')
const IntranetDB = require('intranet-db')
const DbStub = require('./test/stub/db')

let db = new IntranetDB()

if (process.env.NODE_ENV !== 'production') {
  db = new DbStub()
}

const saveOffice = async function saveOffice (req, res) {
  const office = await json(req)
  const created = await db.saveOffice(office)
  send(res, 201, created)
}

const getOffice = async function getOffice (req, res) {
  const id = req.params.id
  const office = await db.getOffice(id)
  send(res, 200, office)
}

const getOffices = async function getOffices (req, res) {
  const offices = await db.getOffices()
  send(res, 200, offices)
}

const notFound = async function notFound (req, res) {
  send(res, 404, 'Not Found')
}

module.exports = router(
  post('/', saveOffice),
  get('/list', getOffices),
  get('/:id', getOffice),
  get('/*', notFound)
)
