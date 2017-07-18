import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise-native'
import fixtures from './fixtures'
import projects from '../projects'

test.beforeEach(async t => {
  const srv = micro(projects)
  t.context.url = await listen(srv)
})

test('POST /save', async t => {
  const project = fixtures.getProject()
  const url = t.context.url

  const options = {
    method: 'POST',
    uri: `${url}/save`,
    json: true,
    body: project,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 201)
  t.deepEqual(response.body, project)
})

test('GET /:id', async t => {
  const project = fixtures.getProject()
  const url = t.context.url

  const options = {
    method: 'GET',
    uri: `${url}/${project.id}`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, project)
})

test('GET /list', async t => {
  const projects = fixtures.getProjects()
  const url = t.context.url

  const options = {
    method: 'GET',
    uri: `${url}/list`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, projects)
})

test('PUT /:id', async t => {
  const project = fixtures.getProject()
  const url = t.context.url

  const options = {
    method: 'PUT',
    uri: `${url}/${project.id}`,
    json: true,
    body: project,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, project)
})

test('DELETE /:id', async t => {
  const project = fixtures.getProject()
  const url = t.context.url

  const options = {
    method: 'DELETE',
    uri: `${url}/${project.id}`,
    json: true,
    resolveWithFullResponse: true
  }

  const response = await request(options)

  t.is(response.statusCode, 200)
  t.deepEqual(response.body, project)
})
