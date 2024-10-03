import fs from 'node:fs'

import mustache from 'mustache'
import core from '@actions/core'

const input = core.getInput('input-file')
const output = core.getInput('output-file') ?? input
const vars = core.getInput('vars').split('\n')

const regex = /{{(?<key>.*)}}[ ]*=[ ]*(?<value>.*)/
const options = vars.reduce((accumulator, variable) => {
  const matches = variable.match(regex)
  const { key, value } = matches.groups
  accumulator[key] = value
  return accumulator
}, {})

const data = fs.readFileSync(input, 'utf8')
fs.writeFileSync(output, mustache.render(data, { ...options }))
