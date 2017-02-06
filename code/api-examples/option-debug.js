require('seneca')({

  // Set option via Seneca constructor.
  debug: {
    undead: true
  }
})

  // Test mode has easy to read logs.
  .test() 

  // Normally, this would be fatal, but with debug.undead = true,
  // you get error logs instead.
  .use(function bad_plugin () {
    throw new Error('plugin definition failed')
  })

  // Add a deprecated action pattern.
  .add('a:1,deprecate$:"a:1 is too old"', function (msg, reply) {reply()})

  // As debug.deprecation is true by default, you get a deprecation log entry:
  // 232/zq	act/DEPRECATED	ic/rt		{a:1}	a:1 is too old
  .act('a:1')

  // Wait for above actions to complete before changing options.
  .ready(function () {
    this
      .options({debug: {deprecation: false}}, true) // (true => chainable)

    // Now, no warnings are logged.
      .act('a:1')
  })
