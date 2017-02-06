require('seneca')()
  .add('a:1', function (msg, reply) {

    // Prints message identifier in format
    // message-id/correlation-id
    console.log(msg.meta$.id)

    reply()
  })
  .act('a:1')
