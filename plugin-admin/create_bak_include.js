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
  let giturl = ''
  if (typeof pkg.repository != 'undefined') {
    let gitslash = pkg.repository.url.split('/')
    switch (gitslash.length) {
      case 5:
        giturl = gitslash[3] + '/' + gitslash[4].split('.')[0]
        break
      case 2:
        let gitdot = pkg.repository.url.split('.')
        giturl = gitdot[1].split(':')[1]
        break
      default:
        break
    }
  }
  pluginData[pkg.name] = {
    title: title,
    org_repo: giturl,
    description: pkg.description,
  }
  // ejs fields: badges, badges urls
  pluginData[pkg.name].main = pkg.main
})
console.log(pluginData)

// Group name: ejs
// Group desc: ejs
//   name: npm
//   title: ejs/npm string manipulation (go with npm)
//   org_repo: npm
//   desc: npm
//   badges: ejs
//   deepscan_url: ejs
//   deepscan_badge: ejs
//   maintainability_badge: ejs
