const fs = require('fs')
const jsonic = require('jsonic')
const { plugins } = require('./old_plugins')

let newPlugins = {}

Object.keys(plugins).forEach((familyName) => {
  // console.log('\n' + familyName)
  let family = plugins[familyName]
  Object.keys(family).forEach((pluginName) => {
    if ('XdescX' == pluginName) return
    // console.log(pluginName)
    let plugin = plugins[familyName][pluginName]
    let newp = {}
    newp.family = familyName
    newp.badges = plugin.badges
    newp.deepscan_url = plugin.deepscan_url
    newp.deepscan_badge = plugin.deepscan_badge
    newp.maintainability_badge = plugin.maintainability_badge
    newPlugins[pluginName] = newp
  })
})

exports.flatPlugins = newPlugins
