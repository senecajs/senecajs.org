var Seneca = require('seneca')

// Create server. Hide logging noise.
Seneca({log:'silent'})

  // Define some action patterns.

  .add({a: 1}, function (msg, reply) {
    reply({z: msg.z})
  })

  .add({b: 1}, function (msg, reply) {
    reply({y: msg.y})
  })


  // Define an action pattern that fails.
  .add({a: 2}, function (msg, reply) {
    reply(new Error('bad'))
  })


  // Listen on localhost:9000 for any messages
  .listen(9000)

  // Listen on localhost:9001 for any messages that match b:1
  .listen({port: 9001, pin: 'b:1'})


// Create client. Hide logging noise.
Seneca({log:'silent'})

  // Define a local action.
  .add({c: 1}, function (msg, reply) {
    reply({x: msg.x})
  })


  // Send any unrecognized messages to localhost:9000     
  .client(9000)

  // Send any messages that match b:1 to localhost:9001     
  .client({port: 9001, pin: 'b:1'})


  // Executes remotely. Prints: { z: 'A' }
  .act('a:1,z:A', Seneca.util.print)

  // Executes remotely. Prints: ERROR: seneca: Action a:2 failed: bad.
  .act('a:2', Seneca.util.print)

  // Executes remotely. Prints: { y: 'B' }
  .act('b:1,y:B', Seneca.util.print)

  // Executes locally. Prints: { x: 'C' }
  .act('c:1,x:C', Seneca.util.print)

