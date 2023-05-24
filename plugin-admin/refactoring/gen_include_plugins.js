const fs = require('fs')

let pluginData = {}

//body of code here

let incl = `<%allPlugins = ${JSON.stringify(pluginData)}%>`
fs.writeFile('../src/pages/plugins-2023/plugins_gen.ejs', incl, (err) => {
  if (err) throw err
  console.log(
    'Generated plugins EJS file successfully written to src/pages/plugins-2023 directory.'
  )
})
