require('seneca')()

  // load the seneca-entity plugin (`seneca-` prefix is optional)
  // See https://www.npmjs.com/package/seneca-entity
  .use('entity')

  // load the @seneca/repl plugin (`@seneca/` prefix is optional)
  // See https://www.npmjs.com/package/@seneca/repl
  .use('repl')

  // load an inline plugin
  .use(function MyInlinePlugin(options) {
    this.add('role:my-inline-plugin,cmd:foo', function cmd_foo(msg, reply) {
      return reply({bar: msg.bar})
    })
  })

  // load a plugin from node_modules (same as `require`)
  .use('our-plugin')

  // load a custom plugin using same search path as `require`
  // and provide some plugin-specific options
  .use('./my-plugin.js', {foo:'bar'})

  // Or use `require` directly to disambiguate special cases
  .use(require(__dirname+'/../shared/plugin.js'), {foo:'bar'})
