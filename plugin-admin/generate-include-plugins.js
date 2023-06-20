const fs = require('fs')
const pkgjson = require('./package.json')

const pluginList = Object.keys(pkgjson.dependencies)
const { badgeData } = require('./badgeData')
const { familyData } = require('./familyData')
const { runPluginMaintain } = require('./run-maintain')
const { generateKey } = require('crypto')
const npmData = pluginList.reduce(
  (npmData, dep) => (
    (npmData[dep] = require('./node_modules/' + dep + '/package.json')), npmData
  ),
  {}
)

async function generateData() {
  let maintainData = await runPluginMaintain()

  let pluginData = {}

  pluginList.forEach((pluginName) => {
    let plugin = {}

    let pkg = npmData[pluginName]
    let title_match = pkg.name.match(/^@?seneca[-|/]([a-z|-]+)/)
    plugin.title = title_match ? title_match[1] : pkg.name

    if (null != pkg.repository) {
      let orgrepo_match = pkg.repository.url.match(
        /(git@|(git|(git\+)*https):\/\/)github.com(\/|:)([a-z]+\/[a-z0-9-]+)(.git)*/
      )
      plugin.org_repo = orgrepo_match?.[5]
    }

    plugin.desc = pkg.description

    plugin.badges = badgeData[pluginName].badges
    plugin.seneca_maintain = maintainData[pluginName]
    plugin.deepscan_url = badgeData[pluginName].deepscan_url
    plugin.deepscan_badge = badgeData[pluginName].deepscan_badge
    plugin.maintainability_badge = badgeData[pluginName].maintainability_badge

    pluginData[pluginName] = plugin
  })

  const familyDataSorted = Object.keys(familyData).sort().reduce(
    (obj, key) => {
      obj[key] = familyData[key]
      return obj
    },
    {}
  )

  let pluginByFamily = familyDataSorted
  Object.keys(pluginByFamily).forEach((familyName) => {

    // function compareSeneca(a, b) {
    //   let senecaRX = /@*seneca(\/|-){1}([a-z0-9-]+)/
    //   a = a.match(senecaRX)[2]
    //   b = b.match(senecaRX)[2]
    //   return a>b
    // }
    // pluginByFamily[familyName].members.sort(compareSeneca)
    pluginByFamily[familyName].members.sort()

    pluginByFamily[familyName].members.forEach((member) => {
      pluginByFamily[familyName].plugins[member] = pluginData[member]
    })
  })

  let incl = `<%allPlugins = ${JSON.stringify(pluginByFamily)}%>`
  fs.writeFile('../src/pages/plugins-2023/plugins_gen.ejs', incl, (err) => {
    if (err) throw err
    console.log(
      'Regenerated plugin data to include file in src/pages/plugins-2023 dir.'
    )
  })
}

generateData()
