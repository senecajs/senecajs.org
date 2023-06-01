const { Maintain } = require('../../seneca-maintain/maintain')
const pkgjson = require('./package.json')

async function runMaintain() {
  let pluginMaintain = {}
  const pluginList = Object.keys(pkgjson.dependencies)
  for (let p = 0; p < pluginList.length; p++) {
    let pluginName = pluginList[p]
    console.log(pluginName)
    pluginMaintain[pluginName] = await Maintain({
      returnBool: true,
      runPath: '/node_modules/' + pluginName,
    })
  }
  console.log(pluginMaintain)
}

runMaintain()
