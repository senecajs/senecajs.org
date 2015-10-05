'use strict'

var minimist = require('minimist'),
    metalsmith = require('metalsmith')(__dirname),
    download = require('metalsmith-download'),
    metallic = require('metalsmith-metallic'),
    markdown = require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    partials = require('metalsmith-register-partials'),
    moveUp = require('metalsmith-move-up'),
    ignore = require('metalsmith-ignore'),
    serve = require('metalsmith-serve'),
    watch = require('metalsmith-watch')

var argv = minimist(process.argv.splice(2), {
  boolean: ['serve'],
  alias: {'serve': 's'}
})

metalsmith.source('./src')
metalsmith.destination('./dist')
metalsmith.use(metallic())

metalsmith.use(markdown({
  smartypants: true,
  gfm: true,
  tables: true
}))

metalsmith.use(partials({
  directory: 'src/template/partials'
}))

metalsmith.use(layouts({
  engine: 'handlebars',
  directory: 'src/template/layouts'
}))

metalsmith.use(moveUp({
  pattern: [
    'pages/**',
    'images/favicon.ico'
]}))

if (argv.serve) {
  metalsmith.use(watch())
  metalsmith.use(serve({
    port: 4000,
    verbose: true,
    cache: 1,
    http_error_files: {
      404: "/404.html"
    }
  }))
} else {
  metalsmith.use(ignore([
    'template/**'
  ]))
}

metalsmith.build(function (err) {
  if (err) console.log(err)
  else console.log('Build complete...')
})
