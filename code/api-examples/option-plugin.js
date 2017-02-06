// The foo plugin
function foo (options) {

  // Prints: hello Mars
  console.log('hello '+options.hello)

  // Prints: bye Earth
  console.log('bye '+options.bye)

  // A plugin can change its own options
  this.options({
    plugin: {
      foo: {
        why: 'wait'
      }
    }
  })
}

require('seneca')({

  // Namespace for plugin options.
  plugin: {

    // Preset options for the foo plugin.
    foo: {
      hello: 'Mars'
    }
  }
})

  // Define the foo plugin
  .use(foo, {
    bye: 'Earth'
  })

  .ready(function () {
    // Prints: { why: 'wait', hello: 'moon', bye: 'earth' }
    console.log(this.options().plugin.foo)
  })
