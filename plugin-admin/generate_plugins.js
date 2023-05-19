// Generate plugin data file from npm node_modules and previous manually created plugin data file
const fs = require('fs')
const jsonic = require('jsonic')

let pluginData = {}

let pkgjson = require('./package.json')
const pkgmap = Object.keys(pkgjson.dependencies).reduce(
  (pkgmap, dep) => (
    (pkgmap[dep] = require('./node_modules/' + dep + '/package.json')), pkgmap
  ),
  {}
)

Object.values(pkgmap).forEach((pkg) => {
  // npm fields: name, title, org_repo, desc
  let title_match = pkg.name.match(/^@?seneca[-|/]([a-z|-]+)/)
  let title = title_match ? title_match[1] : pkg.name
  if (null != pkg.repository) {
    let orgrepo_match = pkg.repository.url.match(
      /[a-z]+:\/\/github.com\/([a-z]+\/[a-z|-]+).git/
    )
    let org_repo = orgrepo_match ? orgrepo_match[1] : pkg.name
  }
  pluginData[pkg.name] = {
    title: title,
    org_repo: org_repo,
    desc: pkg.description,
  }
})

// ejs fields: badges, badges urls
let ejs = fs
  .readFileSync('../src/pages/plugins-2023/plugins_manual.ejs')
  .toString()
ejsStr = ejs.slice(16, -2)
let eplugins = jsonic(ejsStr)
pluginGroups = Object.keys(eplugins)
pluginGroups.forEach((groupName) => {
  let group = eplugins[groupName]
  pluginNames = Object.keys(group)
  pluginData[groupName] = { XdescX: '' }
  pluginNames.forEach((plugin) => {
    if ('XdescX' == plugin) {
      pluginData[groupName].XdescX = group.XdescX
      return
    } else if (!Object.keys(pluginData).includes(plugin)) {
      return
    }
    pluginData[plugin].badges = group[plugin].badges
    pluginData[plugin].deepscan_url = group[plugin].deepscan_url
    pluginData[plugin].deepscan_badge = group[plugin].deepscan_badge
    pluginData[plugin].maintainability_badge =
      group[plugin].maintainability_badge
    pluginData[groupName][plugin] = pluginData[plugin]
    delete pluginData[plugin]
  })
  if (1 == Object.keys(pluginData[groupName]).length) {
    delete pluginData[groupName]
  }
})

let bak_include = `<%allPlugins = ${JSON.stringify(pluginData)}%>`
fs.writeFile(
  '../src/pages/plugins-2023/plugins_gen.ejs',
  bak_include,
  (err) => {
    if (err) throw err
    console.log(
      'Generated plugins EJS file successfully written to src/pages/plugins-2023 directory.'
    )
  }
)
