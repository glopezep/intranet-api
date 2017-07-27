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

test('POST /position/save', async t => {
  const position = fixtures.getPosition()
  const url = t.context.url

  const options = {
    method: 'POST',
    uri: `${url}/position/save`,
    json: true,
    body: position,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 201)
  t.deepEqual(response.body, position)
})

test('GET /position/:id', async t => {
  const position = fixtures.getPosition()
  const url = t.context.url

  const options = {
    method: 'GET',
    uri: `${url}/position/${position.id}`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, position)
})

test('GET /position/list', async t => {
  const positions = fixtures.getPositions()
  const url = t.context.url

  const options = {
    method: 'GET',
    uri: `${url}/position/list`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, positions)
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

test('GET /:username', async t => {
  const user = fixtures.getUser()
  const url = t.context.url

  const options = {
    method: 'GET',
    uri: `${url}/${user.username}`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, user)
})

test('GET /list', async t => {
  const users = fixtures.getUsers()
  const url = t.context.url

  const options = {
    method: 'GET',
    uri: `${url}/list`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, users)
})

test('GET /office/:id/users', async t => {
  const office = fixtures.getOffice()
  const users = fixtures.getUsers()
  const url = t.context.url

  const options = {
    method: 'GET',
    uri: `${url}/office/${office.id}/users`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, users)
})

test('PUT /:username', async t => {
  const user = fixtures.getUser()
  const url = t.context.url

  const options = {
    method: 'PUT',
    uri: `${url}/${user.username}`,
    json: true,
    body: user,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 201)
  t.deepEqual(response.body, user)
})

test('DELETE /:username', async t => {
  const user = fixtures.getUser()
  const url = t.context.url

  const options = {
    method: 'DELETE',
    uri: `${url}/${user.username}`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, user)
})
