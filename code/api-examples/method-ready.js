require('seneca')()

  // Define the foo plugin
  .use(function foo () {
    
    // The special initialization action, which is automatically gated.
    this.add('init:foo', function (msg, reply) {
      setTimeout(reply, 100)
    })
  })

  // Define the bar plugin
  .use(function bar () {
    
    // The special initialization action, which is automatically gated.
    this.add('init:bar', function (msg, reply) {
      setTimeout(reply, 100)
    })
  })

  // Called once foo and bar initialization is complete.
  .ready(function () {
    console.log('Seneca ready!')
  })
