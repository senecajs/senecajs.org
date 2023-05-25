const fs = require('fs')

const { plugins } = require('./old_plugins_def')

let newPlugins = {}

Object.keys(plugins).forEach((familyName) => {
  let family = plugins[familyName]
  Object.keys(family).forEach((pluginName) => {
    if ('XdescX' == pluginName) return
    let plugin = plugins[familyName][pluginName]
    let newp = {}
    newp.badges = plugin.badges
    newp.deepscan_url = plugin.deepscan_url
    newp.deepscan_badge = plugin.deepscan_badge
    newp.maintainability_badge = plugin.maintainability_badge
    newPlugins["'" + pluginName + "'"] = newp
  })
})

exports.localData = newPlugins

let inclNP = JSON.stringify(newPlugins)
fs.writeFile('./export_newPlugins.json', inclNP, (err) => {
  if (err) throw err
  console.log('Success on newPlugins export.')
})
