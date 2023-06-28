module.exports = {
  runPluginMaintain: async function () {
    const { Maintain } = require('@seneca/maintain')
    const pkgjson = require('./package.json')

    let pluginMaintain = {}
    const pluginList = Object.keys(pkgjson.dependencies)
    for (let p = 0; p < pluginList.length; p++) {
      let pluginName = pluginList[p]
      pluginMaintain[pluginName] = await Maintain({
        returnBool: true,
        runPath: '/node_modules/' + pluginName,
        exclude: ['check_default', 'content_gitignore'],
      })
    }
    return pluginMaintain
  },
}
