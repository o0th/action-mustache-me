import mustache from 'mustache'
mustache.escape = (text) => text

import core from '@actions/core'
import github from '@actions/github'

const file = core.getInput('file')
const vars = core.getInput('vars').split('\n')

const regex = /{{(?<key>.*)}}[ ]*=[ ]*(?<value>.*)/
const options = vars.reduce((accumulator, variable) => {
  const matches = variable.match(regex)
  const { key, value } = matches.groups
  accumulator[key] = value
  return accumulator
}, {})

console.log(github.context)
console.log(options)
console.log(file)
