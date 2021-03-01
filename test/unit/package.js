'use strict'

const {test, threw} = require('tap')
const fixtures = require('../fixtures/commits/index.js')
const {testCommit} = require('../common/bootstrap.js')

test('package', async (t) => {
  t.test('valid cases', async (t) => {
    for (const [name, commit] of Object.entries(fixtures.valid)) {
      testCommit(t, {
        commit
      , strict: false
      , report: {
          valid: true
        , errors: []
        , warnings: []
        }
      }, name)
    }
  })

  t.test('error cases', async (t) => {
    testCommit(t, {
      commit: fixtures.error['missing-issue-ref']
    , strict: false
    , report: {
        valid: false
      , errors: [{
          level: 2
        , valid: false
        , name: 'references-empty'
        , message: 'references may not be empty'
        }]
      , warnings: []
      , input: String
      }
    })

    testCommit(t, {
      commit: fixtures.error['missing-body']
    , strict: true
    , report: {
        valid: false
      , errors: [{
          level: 2
        , valid: false
        , name: 'body-empty'
        , message: 'body may not be empty'
        }]
      , warnings: []
      , input: fixtures.error['missing-body'].trim()
      }
    })
  })
}).catch(threw)
