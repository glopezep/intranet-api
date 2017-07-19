import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise-native'
import fixtures from './fixtures'
import users from '../users'

test.beforeEach(async t => {
  const srv = micro(users)
  t.context.url = await listen(srv)
})

test('POST /save', async t => {
  const user = fixtures.getUser()
  const url = t.context.url

  const options = {
    method: 'POST',
    uri: `${url}/save`,
    json: true,
    body: user,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 201)
  t.deepEqual(response.body, user)
})

test.todo('GET /list')
test.todo('GET /office/:id/users')
test.todo('GET /:id')
test.todo('PUT /:id')
test.todo('DELETE /:id')
