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
