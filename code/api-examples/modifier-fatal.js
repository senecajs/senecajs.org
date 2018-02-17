require('seneca')()

  // Add an action pattern that fails
  .add('a:1', function (msg, reply) {
    throw new Error('something bad happened')
  })

  // Logs an error, but Seneca process does not die
  .act('a:1')

  // Seneca causes Node.js process to die
  .act('a:1, fatal$:true')

// BUT - you can disable this for testing
require('seneca')({debug: {undead: true}})

  .add('a:1', function (msg, reply) {
    throw new Error('something bad happened')
  })

  // Now Seneca won't die
  .act('a:1, fatal$:true')
