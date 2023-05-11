// Write to file (ex)
// const src = `<% const pkgdata = ${JSON.stringify(allTheBits)} %>`

// Create empty object structure
// Read plugins.ejs object in here and save as local variable
// For each dep in node_modules (as we don't want the ones not on npm):
//   Write relevant information from package.json (stored in node_modules folder) to object
//   Write relevant information not found in package.json from plugins.ejs variable to object
// End for
// Convert data to string to send
// Write string data to file in /plugins-2023 to be included in another file in that dir
