'use strict'

const lint = require('./commitlint/lint.js')

module.exports = {
  testCommit
}

function testCommit(t, def, msg) {
  return t.test(def.description, async (t) => {
    const report = await lint(def.commit)
    const assert = def.strict
      ? t.deepEqual
      : t.match

    assert(report, def.report, msg)
  })
}
