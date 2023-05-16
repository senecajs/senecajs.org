// Create empty object structure
// Read plugins.ejs object in here and save as local variable
// For each dep in package.json (as we don't want the ones not on npm):
//   NOTE: scoped packages under node_modules/@seneca/title, unscoped under node_modules/name
//   Write relevant information from package.json (stored in node_modules folder) to object
//   Write relevant information not found in package.json from plugins.ejs variable to object
//   NOTE: how to get groups if not every plugin.ejs is going in?
// End for
// Convert data to string to send
// Write string data to file in /plugins-2023 to be included in another file in that dir
const fs = require('fs')
const jsonic = require('jsonic')

let pluginData = {}

let pkgjson = require('./package.json')
Object.keys(pkgjson.dependencies).forEach((dep) => {
  // npm fields: name, title, org_repo, desc
  let pkg = require('./node_modules/' + dep + '/package.json')
  // pkg.name
  let title = pkg.name
  switch (pkg.name[0]) {
    case '@':
      title = title.slice(8)
      break
    case 's':
      title = title.slice(7)
      break
    default:
      break
  }
  // org_repo
  let org_repo = ''
  if (typeof pkg.repository != 'undefined') {
    let giturl = pkg.repository.url.split('/')
    switch (giturl.length) {
      case 5:
        org_repo = giturl[3] + '/' + giturl[4].split('.')[0]
        break
      case 2:
        giturl = pkg.repository.url.split('.')
        org_repo = giturl[1].split(':')[1]
        break
      default:
        break
    }
  }
  pluginData[pkg.name] = {
    title: title,
    org_repo: org_repo,
    desc: pkg.description,
  }
})

// ejs fields: badges, badges urls
let ejs = fs
  .readFileSync('../src/pages/plugins-2023/plugins_man.ejs')
  .toString()
ejsStr = ejs.slice(16, -2)
let eplugins = jsonic(ejsStr)
// get group from package title
pluginGroups = Object.keys(eplugins)
pluginGroups.forEach((groupName) => {
  let group = eplugins[groupName]
  pluginNames = Object.keys(group)
  // create group object in pluginData
  pluginData[groupName] = { XdescX: '' }
  pluginNames.forEach((plugin) => {
    if ('XdescX' == plugin) {
      // add description to plugin group
      pluginData[groupName].XdescX = group.XdescX
      return
    } else if (!Object.keys(pluginData).includes(plugin)) {
      return
    }
    // add ejs data to plugin
    pluginData[plugin].badges = group[plugin].badges
    pluginData[plugin].deepscan_url = group[plugin].deepscan_url
    pluginData[plugin].deepscan_badge = group[plugin].deepscan_badge
    pluginData[plugin].maintainability_badge =
      group[plugin].maintainability_badge
    // move plugin into group
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
