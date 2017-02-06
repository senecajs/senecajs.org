require('seneca')()
  .add('a:1', function (msg, reply) {

    console.log(msg.z+' is synchronous: '+msg.meta$.sync)

    if (msg.meta$.sync) {
      reply({z: msg.z})
    }
    else {
      // You must always call the reply function even when there is no response
      // data, as this lets Seneca know that the action is complete.
      reply()
    }
  })

  // Omitting the callback makes a message asynchronous.
  // Prints: 0 is synchronous: false
  .act('a:1,z:0')

  // Providing the callback makes a message synchronous.
  // Prints: 1 is synchronous: true
  .act('a:1,z:1', console.log)
