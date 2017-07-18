import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise-native'
import fixtures from './fixtures'
import offices from '../offices'

test.beforeEach(async t => {
  const srv = micro(offices)
  t.context.url = await listen(srv)
})

test('POST /save', async t => {
  const office = fixtures.getOffice()
  const url = t.context.url

  const options = {
    method: 'POST',
    uri: url,
    json: true,
    body: office,
    resolveWithFullResponse: true
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
