import mustache from 'mustache'
mustache.escape = (text) => text

import core from '@actions/core'

const file = core.getInput('file')
const variables = core.getInput('variables').split('\n')

const regex = /{{(?<key>.*)}}[ ]*=[ ]*(?<value>.*)/
const options = variables.reduce((accumulator, variable) => {
  const matches = variable.match(regex)
  const { key, value } = matches.groups
  accumulator[key] = value
  return accumulator
}, {})

console.log(github.context)
console.log(options)
console.log(file)
