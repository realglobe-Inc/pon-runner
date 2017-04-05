'use strict'

const ponRunner = require('pon-runner')

const css = require('pon-task-css')
const browser = require('pon-task-browser')

async function tryExample () {
  let runner = ponRunner({
    'ui:style': css('ui/stylesheets', 'public'),
    'ui:browser': browser('shim/entrypoints', 'public/js')
  })

  // Execute task by names
  await runner.run('ui:style', 'ui:bundle')
}

tryExample()
