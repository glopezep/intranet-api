import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise-native'
import fixtures from './fixtures'
import offices from '../offices'
import utils from '../lib/utils'
import config from '../config'

test.beforeEach(async t => {
  const srv = micro(offices)
  t.context.url = await listen(srv)
})

test('No token POST /save', async t => {
  const office = fixtures.getOffice()
  const url = t.context.url

  const options = {
    method: 'POST',
    uri: `${url}/save`,
    json: true,
    body: office,
    resolveWithFullResponse: true
  }

  await t.throws(request(options), /invalid token/)
})

test('Secure POST /save', async t => {
  const office = fixtures.getOffice()
  const user = fixtures.getUser()
  const url = t.context.url

  const payload = { username: user.username }
  const token = await utils.signToken(payload, config.secret, {})

  const options = {
    method: 'POST',
    uri: `${url}/save`,
    json: true,
    body: office,
    resolveWithFullResponse: true,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await request(options)

  t.is(response.statusCode, 201)
  t.deepEqual(response.body, office)
})

test('GET /:id', async t => {
  const office = fixtures.getOffice()
  const url = t.context.url

  const options = {
    method: 'GET',
    uri: `${url}/${office.id}`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)
  t.is(response.statusCode, 200)
  t.deepEqual(response.body, office)
})

test('GET /list', async t => {
  const offices = fixtures.getOffices()
  const url = t.context.url

  const options = {
    method: 'GET',
    uri: `${url}/list`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, offices)
})

test('PUT /:id', async t => {
  const office = fixtures.getOffice()
  const url = t.context.url

  const options = {
    method: 'PUT',
    uri: `${url}/${office.id}`,
    json: true,
    body: office,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, office)
})

test('DELETE /:id', async t => {
  const office = fixtures.getOffice()
  const url = t.context.url

  const options = {
    method: 'DELETE',
    uri: `${url}/${office.id}`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, office)
})
