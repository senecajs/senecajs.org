const { plugins } = require('./old_plugins_def')

let newPlugins = {}
let familyMembers = {}

Object.keys(plugins).forEach((familyName) => {
  familyMembers[familyName] = []
  let family = plugins[familyName]
  Object.keys(family).forEach((pluginName) => {
    if ('XdescX' == pluginName) return
    familyMembers[familyName].push(pluginName)
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

exports.localData = newPlugins
exports.familyMembers = familyMembers
